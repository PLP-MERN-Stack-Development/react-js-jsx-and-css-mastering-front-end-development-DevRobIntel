// src/pages/ApiPage.jsx
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">API Data from JSONPlaceholder</h2>
      
      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
        />
      </div>

      {/* Data grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">No results found</p>
        ) : (
          filteredData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              content={item.body.substring(0, 150) + '...'}
              footer={`Post ID: ${item.id}`}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <Button 
          variant="secondary" 
          onClick={handlePrevPage} 
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-gray-600 dark:text-gray-300">Page {page}</span>
        <Button 
          variant="secondary" 
          onClick={handleNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApiPage;