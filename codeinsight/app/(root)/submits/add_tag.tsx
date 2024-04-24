'use client'; 

import React, { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]); // 存储所有标签
  const [input, setInput] = useState(''); // 当前输入框的值

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // 确保提交时不会重新加载页面
    // if (!tags) {
    //   alert('Please add tags');
    // };

    try {
      await fetch('http://localhost:3000/api/submits'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tags }),
      },
      console.log(tags);
    } catch (error) {
      console.error(error);
    }
  }

  const handleKeyDown = (e: { key: string; }) => {
    const trimmedInput = input.trim();
    if (e.key === ' ' && trimmedInput.length && !tags.includes(trimmedInput)) {
      // 如果按下空格键，并且输入框有值（且值不在标签列表中），则添加标签
      setTags([...tags, trimmedInput]);
      setInput(''); // 清空输入框
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index)); // 移除索引为 index 的标签
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(e.target.value); // 更新输入框的值
  };

  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <div className="flex flex-wrap gap-2 w-full py-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="mt-2 w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Type and press space to add tags..."
        />
      </div>
      <div className="flex flex-wrap gap-2 w-full">
      {tags.map((tag, index) => (
        <span key={index} className="inline-flex items-center gap-x-1 px-2 py-0.5 text-sm font-medium tracking-wide justify-center rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {tag}
          <button
            type="button"
            onClick={() => handleRemoveTag(index)}
            className="inline-flex items-center justify-center rounded-full p-1 hover:bg-red-200" // Added padding and hover background
            aria-label="Remove tag"
          >
            <svg viewBox="0 0 20 20" className="h-2 w-2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </span>
      ))}
      </div>

    {/* // </form> */}
    </div>
  );
};

export default TagInput;

