import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import '../quote.css';
import ApiCredentials from './ApiCredentials';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const apiFetched = useRef(false);

  useEffect(() => {
    if (apiFetched.current) return;
    apiFetched.current = true;
    const fetchQuote = async () => {
      try {
        const response = await fetch(ApiCredentials.URL, {
          headers: {
            'X-Api-Key': ApiCredentials.KEY
          }
        })
        const quoteResponse = await response.json()
        setQuote(quoteResponse[0].quote);
        setCategory(quoteResponse[0].category);
        setAuthor(quoteResponse[0].author);
        setIsLoading(true);
      } catch (error) {
        setError(error.message)
        setIsLoading(false);
      }
    };
    fetchQuote();

  }, [])

  if (error) {
    return (
      <p id='quote-error'>Error: {error}</p>
    )
  }

  return (
    <div className='quote-wrapper'>
      {!isLoading? (
        <p id='quote-loading'>Quotes loading ...</p>
      ) : (
        <div>
          <p id='quote-category'>{category}</p>
          <p id='quote-main'>{quote}</p>
          <p id='quote-author'>{author}</p>
        </div>
      )}
    </div>
  )
};

export default Quotes;