// components/ViewBAAButton.jsx
import React, { useState } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ViewBAAButton = () => {
  const [loading, setLoading] = useState(false);

  const handleViewBAA = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:8000/api/v1/provider/baa-document/', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch BAA document');
      }
      
      if (data.baa_pdf_url) {
        window.open(data.baa_pdf_url, '_blank');
      } else {
        toast.error('BAA document not available');
      }
    } catch (err) {
      console.error('Error fetching BAA:', err);
      toast.error(err.message || 'Could not load BAA document');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleViewBAA}
      disabled={loading}
      className="
        bg-teal-500 text-white 
        py-2 px-4 
        rounded-full shadow-lg 
        hover:bg-teal-600 
        transition duration-300 
        flex items-center 
        text-sm font-semibold
        disabled:opacity-50
      "
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : (
        <IoDocumentTextOutline className="text-lg mr-2" />
      )}
      {loading ? 'Loading...' : 'View Signed BAA'}
    </button>
  );
};

export default ViewBAAButton;