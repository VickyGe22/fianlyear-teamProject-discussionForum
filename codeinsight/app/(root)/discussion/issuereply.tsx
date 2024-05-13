import React, { useEffect, useState } from 'react';
import Like from '@/public/images/like.png';
import Like2 from '@/public/images/like-2.png';
import Image from 'next/image'


const people = [
  {
    name: 'Chelsea Hagon',
    imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];


export default function Example({ pageId, disId }:{pageId:string, disId:string}) {

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Array<{ text: string; user: { name: string; imageUrl: string; }; likes: number; isLiked: boolean; }>>([]);

  //get function
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchReply = async () => {
        if (!pageId) return;
      
        try {
          const response = await fetch(`/api/submits/${pageId}/discussions/${disId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch submit');
          }
          const data = await response.json();
          console.log("查看reply的data",data)
          const mappedComments = data.submit.discussions;
          console.log("看看抓到没",mappedComments)
          setComments(mappedComments);// 这里假设响应结构是 { submit: {...} }
          
        } catch (error: any) {
          console.error('Fetch error:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        fetchReply();
        console.log("看看comments",comments)
      }, [pageId, disId]); 

      
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


  const handleCommentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setComment(e.target.value);
  };

  
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submit behavior
    const person = people[0];
    const newComment = {text: comment,user: person,likes: 0, // Initialize likes to 0
    isLiked: false};
    setComments([...comments, newComment]);
  
    const res = await fetch(`/api/submits/${pageId}/discussions/${disId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ replies: comment, disId: disId } ),
    });
    setComment(''); // Clear the input after submit
  };


  const handleLike = (index: number) => {
    const updatedComments = [...comments];
    const comment = updatedComments[index];
    
    if (comment.isLiked) {
      // 如果已经点赞，取消点赞并减少1个赞
      comment.likes -= 1;
    } else {
      // 如果尚未点赞，点赞并增加1个赞
      comment.likes += 1;
    }
  
    // 切换点赞状态
    comment.isLiked = !comment.isLiked;
    
    
    setComments(updatedComments);
  };

  return (
    <>
      <div >
        {/* Display comments */}
        <div className="divide-y comments py-4 mb-4 ml-10 border-t">
          {comments.map((comment, index) => (
            <div
              key={index}
              className=" mb-4 relative flex items-center space-x-3 px-6 "
            >
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={comment.user.imageUrl} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <br/>
                <p className="text-sm font-medium text-gray-900">{comment.user.name}</p>
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
        <div className="flex items-start space-x-4 ml-10 px-6">
          <div className="flex-shrink-0">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={people[0].imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1 ">
            <form className="relative">
              <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
        
                <textarea
                    rows={2}
                    name="comment"
                    id="comment"
                    className="block w-full  border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Reply for this issue..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                 
                <div className="flex-shrink-0 py-3 px-5 text-left">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-indigo-600"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
