'use client'; 

import React, { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]); // 存储所有标签
  const [input, setInput] = useState(''); // 当前输入框的值

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
          <span key={index} className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-base font-medium text-green-700">
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(index)}
              className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
            >
              <span className="sr-only">Remove</span>
              <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75">
                <path d="M4 4l6 6m0-6l-6 6" />
              </svg>
            </button>
          </span>
        ))}
      </div>

    </div>
  );
};

export default TagInput;
