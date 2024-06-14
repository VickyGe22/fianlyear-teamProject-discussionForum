'use client';

import Sidebar from '@/components/sidebar'
import SubmitList from './submits-list'
import { useEffect, useState } from 'react';
import Pagination from './submit-pagination';
import { Product } from '@/models/interfaces/product';
import axios from 'axios';
import Cookies from 'js-cookie';

const predefinedLabels = {
  levels: ["Bachelor-cs1","Bachelor-cs2","Bachelor-cs3","Bachelor-cs4","Master-cs1","Master-cs2"],
  languages: ["Python","Java","JavaScript","C","C#","C++"],
  types: ["Assignment","Exam","Quiz","Group project"]
};

export default function Home() {
  const [submits, setSubmits] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [numbersamples, setNumbersamples] = useState(0);

  const fetchSubmit = async () => {
    try {
      const response = await fetch("./api/submits?acceptance=true");
      if (!response.ok) {
        throw new Error('Failed to fetch submit');
      }
      const data = await response.json();
      const samples = data.submits.filter((submit: { acceptance: boolean, discuss_close: boolean }) => submit.acceptance && !submit.discuss_close);
      const numbersamples = samples.length
      setNumbersamples(numbersamples);
      setSubmits(data.submits); 
      setFilteredData(data.submits);
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

  const clearCategories = () => {
    setSelectedCategories([]);
  };

  const categories = {
    levels: ["Bachelor-cs1", "Bachelor-cs2", "Bachelor-cs3", "Bachelor-cs4", "Master-cs1", "Master-cs2", "Other levels"],
    languages: ["Python", "Java", "JavaScript", "C", "C#", "C++", "Other languages"],
    types: ["Assignment", "Exam", "Quiz", "Group project", "Other types"]
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
      setFilteredData(submits.filter(product => !product.discuss_close));
    } else {
      setFilteredData(
        submits.filter(product =>
          !product.discuss_close &&
          (
            selectedCategories.includes(product.levels) ||
            selectedCategories.includes(product.languages) ||
            selectedCategories.includes(product.types) ||
            (selectedCategories.includes("Other levels") && !predefinedLabels.levels.includes(product.levels)) ||
            (selectedCategories.includes("Other languages") && !predefinedLabels.languages.includes(product.languages)) ||
            (selectedCategories.includes("Other types") && !predefinedLabels.types.includes(product.types))
          )
        )
      );
    }
    console.log("Filtered Data:", filteredData);
  }, [selectedCategories, submits]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/auth/users');
      console.log('Fetched user:', response.data.data.isAdmin);
      setIsLoggedIn(true);
      setUser(response.data.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(Boolean(token)|| false); // Convert token to boolean using Boolean() function
    const loggedIn = true;  
    if (loggedIn){
      fetchUser();
    }
  }, [setIsLoggedIn]);

 

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
                clearCategories={clearCategories}
              />
              <div className="md:grow">
                <SubmitList currentSubmits={currentSubmits} user={user} />
              </div>
              
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              numberOfItems={numbersamples}
            />
          </div>
        </div>
      </section>
    </>
  );
}
