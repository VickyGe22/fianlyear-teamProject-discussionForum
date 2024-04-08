import React from 'react';

export default function Issue() {
  return (
    <div className="text-sm text-indigo-500 font-medium hover:underline">
      <h2 className="text-lg font-bold mb-2 text-black">ISSUE</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 text-white rounded-lg">
              <th className="px-4 py-2 border w-2/10 hover:bg-gray-600">ISSUE</th>
              <th className="px-4 py-2 border w-6/10 hover:bg-gray-600">Description</th>
              <th className="px-4 py-2 border w-2/10 hover:bg-gray-600">Reply</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200  rounded-lg">
              <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>For loop</td>
              <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXX</td>
              <td className="px-4 py-8 border cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>XXXXXXXX</td>
            </tr>
            <tr className="bg-gray-200 rounded-lg">
              <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>Binary tree</td>
              <td className="px-4 py-8 border w-6/10 cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXXX</td>
              <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>XXXXXXXXX</td>
            </tr>
            <tr className="bg-gray-200 rounded-lg">
              <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>febbonach</td>
              <td className="px-4 py-8 border w-6/10 cursor-pointer hover:bg-gray-300" style={{ width: '60%' }}>XXXXXXXX</td>
              <td className="px-4 py-8 border w-2/10 cursor-pointer hover:bg-gray-300" style={{ width: '20%' }}>XXXXXXXXXXXXXXXXX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

