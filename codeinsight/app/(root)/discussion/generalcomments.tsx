import React, { useState, useEffect } from 'react';
import Like from '@/public/images/like.png';
import Like2 from '@/public/images/like-2.png';
import Image from 'next/image';
import toast from 'react-hot-toast';

const people = [
  {
    name: 'Chelsea Hagon',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Example({ pageId, isLoggedIn, isAdmin, username, userURL }: { pageId: string, isLoggedIn: boolean, isAdmin: boolean, username:string, userURL:string }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Array<{ text: string; user: { name: string; imageUrl: string; }; likes: number; isLiked: boolean; }>>([]);
  const [isPostButtonVisible, setIsPostButtonVisible] = useState(true);
  
  // get function
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubmit = async () => {
    if (!pageId) return;

    try {
      const response = await fetch(`/api/submits/${pageId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      const mappedComments = data.submit.generalreply.map((text: any) => ({
        text: text, // the comment text
        user: people[0], // assigning a default user for each comment
        likes: 0, // initializing likes to 0
        isLiked: false // initializing isLiked to false
      }));
      setComments(mappedComments);// 这里假设响应结构是 { submit: {...} }
      
    } catch (error: any) {
      console.error('Fetch error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmit();
  }, [pageId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleCommentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    if (isLoggedIn===false) {
      toast.error('You need to be logged in to post your comments.');
      alert('You need to be logged in to post your comments.');
      return;
    }
    e.preventDefault(); // Prevent default form submit behavior
    const newComment = {
      text: comment,
      user: { name: username, imageUrl: userURL },
      likes: 0,
      isLiked: false
    };
    setComments([...comments, newComment]);
  
    console.log("Submitting comment:", comment);
    const res = await fetch(`/api/submits/${pageId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        type: "generalreply",
        generalreply: {
          replystring: comment,
          username: username,
          userimage: userURL
        },
        pageId: pageId
      }),
    });
    setComment(''); // Clear the input after submit
  };
  

  const handleLike = (index: number) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];

    if (comment.isLiked) {
      comment.likes -= 1;
    } else {
      comment.likes += 1;
    }

    comment.isLiked = !comment.isLiked;

    setComments(updatedComments);
  };

  const handleDisablePostButton = () => {
    setIsPostButtonVisible(false);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-black">General comments</h1>
      <div className="py-8 px-10">
        {/* Display comments */}
        <div className="comments py-4 mb-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={userURL} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{username}</p>
                <div className="comment text-gray-800 text-sm my-2">
                  {comment.text}
                </div>
              </div>
              <button
                onClick={() => handleLike(index)}
                className="text-gray-500 hover:text-gray-700 flex items-center space-x-1 focus:outline-none"
              >
                {comment.isLiked ? (
                  <Image src={Like2} className="w-4 h-4" alt="Liked" />
                ) : (
                  <Image src={Like} className="w-4 h-4" alt="Like" />
                )}
                <span>{comment.likes}</span>
              </button>
            </div>
          ))}
        </div>
        {/* Comment form */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={people[0].imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <form className="relative">
              <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <label htmlFor="comment" className="sr-only">Add your comment</label>
                <textarea
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Add your comment..."
                  value={comment}
                  onChange={handleCommentChange}
                />
                <div className="py-2" aria-hidden="true">
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
                <div className="flex-shrink-0 py-3 px-5 text-left">
                  {isPostButtonVisible && (
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={handleSubmit}>
                      Post
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 px-4">
          {isAdmin && (
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={handleDisablePostButton}
              >
                Close General Comments
              </button>
            )}
        </div>
      </div>
    </>
  );
}
