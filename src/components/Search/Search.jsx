import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Search() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState('');
  
    const searchHandler = (e) => {
      e.preventDefault();
  
      navigate(keyword.trim() ? `/search/${keyword}` : "/");
    };

  return (
    <div>
    <form onSubmit={searchHandler}>
    <input type="text" onChange={(e) => setKeyword(e.target.value)} />
    <button type="submit">Search</button>
  </form></div>
  )
}

export default Search