import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';

const List = props => {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  const getList = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setList(data);
      setError(false);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  const handleActualCard = id => {
    props.handleActualCard(id);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {hasError && <p style={{color: 'red'}}>Error!</p>}
      {loading && <p>Loading...</p>}
      <div className="List">
        {list.map(item => <ListItem handleActualCard={handleActualCard} key={item.id} item={item} actualId={props.actualId} />)}
      </div>
    </>
  )
}

export default List;