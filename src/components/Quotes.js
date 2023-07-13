import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import '../quote.css';
import ApiCredentials from './ApiCredentials';

function Quotes() {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const apiFetched = useRef(false);

  useEffect(() => {
    if (apiFetched.current) return;
    apiFetched.current = true;
    const fetchQuote = async () => {
      const response = await fetch(ApiCredentials.URL, {
        headers: {
          'X-Api-Key': ApiCredentials.KEY
        }
      })
      const quoteResponse = await response.json()
      console.log(quoteResponse)
      setQuote(quoteResponse[0].quote);
      setCategory(quoteResponse[0].category);
      setAuthor(quoteResponse[0].author);
    };
    fetchQuote();

  }, [])

  

  return (
    <div className='quote-wrapper'>
      <p id='quote-category'>{category}</p>
      <p id='quote-main'>{quote}</p>
      <p id='quote-author'>{author}</p>
    </div>
  )
};

export default Quotes;