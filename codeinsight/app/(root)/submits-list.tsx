'use client';

{/*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/job-board-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/}

import getAllPosts from '@/lib/getAllSubmits'
import PostItem from './submit-item'
import { useEffect, useState } from 'react';
import Pagination from './submit-pagination';

interface Post {
  id: number,
  sticky: boolean,
  title: string,
  status: string,
  tag1: string,
  tag2: string,
  numberReply: string,  
}

export default function SubmitList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter mb-10">Discuss Your Code Samples</h2>
      {/* List container */}
      <div className="flex flex-col">
        {currentPosts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

//用户提交之后绑定展示到这个页面