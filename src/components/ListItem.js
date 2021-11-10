const ListItem = props => {

  const item = props.item;

  const handleActualCard = id => {
    props.handleActualCard(id);
  }

  const activeClass = item.id === props.actualId ? " active" : "";

  return (
    <div className={"ListItem" + activeClass} onClick={() => handleActualCard(item.id)}>{item.name}</div>
  )
}

export default ListItem;