"use client";

import { useEffect, useState } from "react";

const SolutionDisplay = ({ pageId, isAdmin }) => {
  const [submit, setSubmit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTag, setEditingTag] = useState(null);
  const [tagValue, setTagValue] = useState("");
  const createdAt = new Date(submit?.createdAt);
  const formattedDate = createdAt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = createdAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  const fetchSubmit = async () => {
    if (!pageId) return;

    try {
      const response = await fetch(`/api/submits/${pageId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch submit");
      }
      const data = await response.json();
      setSubmit(data.submit);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmit();
  }, [pageId]);

  const handleTagClick = (tag) => {
    setEditingTag(tag);
    setTagValue(tag);
  };

  const handleInputChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submit !== null) {
      try {
        let updatedTags;
        if (editingTag) {
          updatedTags = tagValue
            ? submit.tags.map((tag) => (tag === editingTag ? tagValue : tag))
            : submit.tags.filter((tag) => tag !== editingTag);
        } else {
          updatedTags = tagValue ? [...submit.tags, tagValue] : submit.tags;
        }

        const response = await fetch(`/api/submits/${pageId}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ type: "tags", tags: updatedTags, pageId: pageId }),
        });

        if (!response.ok) {
          throw new Error("Failed to update tag");
        }

        setSubmit(prevSubmit => ({
          ...prevSubmit,
          tags: updatedTags
        }));
        setEditingTag(null);
        setTagValue("");
        } catch (error) {
        console.error("Update error:", error);
        }
      }
  };

  const handleAddTag = () => {
    setEditingTag("");
    setTagValue("");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="bg-white px-4 py-5 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-gray-900">
              {submit?.sampletitles}
            </p>
            <p className="text-lg text-gray-500">
              {formattedDate} at {formattedTime}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-lg font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">
                {submit?.languages}
              </span>
              <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-lg font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">
                {submit?.levels}
              </span>
              <span className="inline-flex items-center rounded-md px-3 bg-indigo-50 text-lg font-normal text-gray-500 ring-1 ring-inset ring-green-600/20">
                {submit?.types}
              </span>
              
              {submit?.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center rounded-md px-3 bg-green-50 text-lg font-normal text-green-700 ring-1 ring-inset ring-green-600/20">
                  {isAdmin && editingTag === tag ? (
                    <form onSubmit={handleSubmit} className="inline-flex items-center">
                      <input
                        type="text"
                        value={tagValue}
                        onChange={handleInputChange}
                        className="rounded-md px-3 text-lg font-normal text-green-700 ring-1 ring-inset ring-green-600/20"
                      />
                      <button type="submit" className="ml-2 px-2 py-1 bg-green-600 text-white text-lg rounded">
                        Save
                      </button>
                    </form>
                  ) : (
                    <span onClick={() => handleTagClick(tag)} className="cursor-pointer">
                      {tag}
                    </span>
                  )}
                </span>
              ))}
              {isAdmin && editingTag === null && (
                <button
                  onClick={handleAddTag}
                  className="ml-2 px-2 py-1 bg-green-600 text-white text-lg rounded"
                >
                  Add Tag
                </button>
              )}
              {isAdmin && editingTag === "" && (
                <form onSubmit={handleSubmit} className="inline-flex items-center">
                  <input
                    type="text"
                    value={tagValue}
                    onChange={handleInputChange}
                    placeholder="Enter new tag"
                    className="rounded-md px-3 text-lg font-normal text-green-700 ring-1 ring-inset ring-green-600/20"
                  />
                  <button type="submit" className="ml-2 px-2 py-1 bg-green-600 text-white text-lg rounded">
                    Save
                  </button>
                </form>
              )}
            </div>
            <div className="flex flex-col bg-gray-100 overflow-auto touch-auto p-4 rounded-md w-full">
                <pre className="flex-1 text-xl text-black-600 font-mono whitespace-pre-wrap">
                  {submit?.codesamples}
                </pre>
              </div>

            <p className="text-2xl text-gray-900 mt-4">{submit?.issuedescriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDisplay;
