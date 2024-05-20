'use client';
const metadata = {
  title: 'Submission',
  description: 'Submitted Your Code Sample',
}

import Sidebar from '@/components/sidebar'
import SubmitList from './submits-list'
import { useEffect, useState } from 'react';
import Pagination from './submit-pagination';

interface Product {
  id: number;
  levels: string;
  languages: string;
  types: string;
  [key: string]: any; // 允许其他额外属性
}

// 定义预定义标签
const predefinedLabels = {
  levels: ["Bachelor-cs1","Bachelor-cs2","Bachelor-cs3","Bachelor-cs4","Master-cs1","Master-cs2"],
  languages: ["Python","Java","JavaScript","C","C#","C++"],
  types: ["Assignments","Exam","Quiz","Group Project"]
};

// 处理数据的函数
const processCategories = (data: Product[]) => {
  return data.map(item => {
    return {
      ...item,
      levels: predefinedLabels.levels.includes(item.levels) ? item.levels : "Others",
      languages: predefinedLabels.languages.includes(item.languages) ? item.languages : "Others",
      types: predefinedLabels.types.includes(item.types) ? item.types : "Others"
    };
  });
};


export default function Home() {
  const [submits, setSubmits] = useState<Product[] >([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);




  const fetchSubmit = async () => {
    try {
      const response = await fetch("./api/submits?acceptance=true");
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      console.log(data.submits);
      const processedData = processCategories(data.submits);
      setSubmits(processedData); 
      setFilteredData(processedData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  useEffect(() => {
    fetchSubmit();
  }, []); 

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;
  const totalPages = submits ? Math.ceil(submits.length / postsPerPage) : 0;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentSubmits = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const categories = {
    levels: ["Bachelor-cs1", "Bachelor-cs2", "Bachelor-cs3", "Bachelor-cs4", "Master-cs1", "Master-cs2", "Others"],
    languages: ["Python", "Java", "JavaScript", "C", "C#", "C++", "Others"],
    types: ["Assignments", "Exam", "Quiz", "Group Project", "Others"]
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(c => c !== category)
        : [...prevSelected, category]
    );
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredData(submits );
    } else {
      setFilteredData(
        (submits ).filter(product =>
          selectedCategories.includes(product.levels) ||
          selectedCategories.includes(product.languages) ||
          selectedCategories.includes(product.types))
      );
      console.log(filteredData);
    }
  }, [selectedCategories, submits]);

  return (
    <>

      

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <div className="md:flex md:justify-between" data-sticky-container>

              <Sidebar 
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              />
              <div className="md:grow">
                <SubmitList currentSubmits={currentSubmits}/>
              </div>
              
            </div>
            <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
          </div>
          
        </div>
      </section>
      
    </>
  )
}
