'use client'; 

import React, { useEffect, useState } from 'react';
import possibleTags from '../../../libs/tag'; // 引用标签列表

const TagInput = ({tags, setTags}: {tags: string[], setTags: React.Dispatch<React.SetStateAction<string[]>>}) => {
  
  const [input, setInput] = useState(''); // 当前输入框的值
  const [hint, setHint] = useState(''); // 标签提示
  const [visibleHint, setVisibleHint] = useState('');

  useEffect(() => {
    if (!input) {
      setVisibleHint('');
      return;
    }
    const match = possibleTags.find(tag => tag.toLowerCase().startsWith(input.toLowerCase()) && !tags.includes(tag));
    setVisibleHint(match ? match.substring(input.length) : '');
    setHint(match || '');
  }, [input, tags]);

  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && hint && !tags.includes(hint)) {
      e.preventDefault(); // Prevent the default focus change behavior of the Tab key
      setInput(hint); // Set the input to the complete hint
      setVisibleHint(''); // Clear the visible hint since it's now in the input
    } else if (e.key === 'Enter' && input && !tags.includes(input)) {
      e.preventDefault(); // Prevent the default form submit behavior
      setTags([...tags, input]); // Add the input as a new tag
      setInput(''); // Clear the input field
    } else if (e.key === 'Backspace' && !input && tags.length) {
      setTags(tags.slice(0, -1)); // Remove the last tag if input is empty and backspace is pressed
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index)); // 移除索引为 index 的标签
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(e.target.value); // 更新输入框的值
    // const value = e.target.value as string; // Cast the value to string type
    // if (value.length) {
    //   const newHint = possibleTags.find(tag => tag.toLowerCase().startsWith(value.toLowerCase()) && !tags.includes(tag));
    //   setHint(newHint ? newHint : ''); // 设置提示，如果没有匹配的则清空提示
    // } else {
    //   setHint('');
    // }
  };

  // const getHintText = () => {
  //   if (!hint) return '';
  //   console.log('这里这里这呵呵呵呵呵', hint.substring(input.length));
  //   return hint.substring(input.length); // 返回提示文本中未输入的部分
  // };
  

  return (
      <div>
        <div className="relative flex flex-wrap gap-2 w-full py-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="mt-2 w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Type and press enter to add tags..."
          aria-label="Tag input"
        />
        {visibleHint && (
          <span className="absolute text-gray pointer-events-none" style={{ left: "1%", right: 0, top: '56%', transform: 'translateY(-50%)' }}>
            {input}{visibleHint}
          </span>
        )}
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

    </div>
  );
};

export default TagInput;

