import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';

const List = props => {
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  const [list, setList] = useState([]);

  const getList = () => fetch(url)
    .then(response => response.json())
    .then(data => setList(data))

  const handleActualCard = id => {
    props.handleActualCard(id);
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="List">
      {list.map(item => <ListItem handleActualCard={handleActualCard} key={item.id} item={item} actualId={props.actualId} />)}
    </div>
  )
}

export default List;