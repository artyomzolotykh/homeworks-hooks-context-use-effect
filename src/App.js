import React, {useState, useEffect} from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [detailItem, setDetailItem] = useState('');
  const [actualCardId, setActualCardId] = useState('');

  const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${actualCardId}.json`;

  const handleActualCard = id => {
    setActualCardId(id);
  }

  const fetchDetailItem = () => fetch(url)
    .then(response => response.json())
    .then(data => setDetailItem(data));

  useEffect(() => {
    if (actualCardId) fetchDetailItem();
  }, [actualCardId]);

  return (
    <div className="App">
      <List handleActualCard={handleActualCard} actualId={actualCardId} />
      {detailItem ? <Details detailItem={detailItem} /> : ''}
    </div>
  );
}

export default App;
