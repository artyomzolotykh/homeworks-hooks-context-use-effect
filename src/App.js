import React, {useState, useEffect} from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [detailItem, setDetailItem] = useState('');
  const [actualCardId, setActualCardId] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${actualCardId}.json`;

  const handleActualCard = id => {
    setActualCardId(id);
  }

  const fetchDetailItem = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setDetailItem(data);
      setError(false);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (actualCardId) fetchDetailItem();
  }, [actualCardId]);

  return (
    <div className="App">
      <List handleActualCard={handleActualCard} actualId={actualCardId} />
      {hasError && <p style={{color: 'red'}}>Error Details</p>}
      {loading && !hasError && <p>Loading...</p>}
      {detailItem && !loading && <Details detailItem={detailItem} />}
    </div>
  );
}

export default App;
