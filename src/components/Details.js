const Details = ({detailItem}) => {

  return (
    <div className="Detail">
      <div className="detail_image">
        <img src={detailItem.avatar + '?t=' + Date.now()} />
      </div>
      <div className="detail_name">
        {detailItem.name}
      </div>
      <div className="detail_row">
        City: {detailItem.details.city}
      </div>
      <div className="detail_row">
        Company: {detailItem.details.company}
      </div>
      <div className="detail_row">
        Position: {detailItem.details.position}
      </div>
    </div>
  )
}

export default Details;