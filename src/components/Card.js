import React, { useState } from 'react'

const Card = ({
  id,
  name,
  info,
  price,
  image,
  removeTour,
  addTour,
  notInterestedButton,
}) => {
  let description = `${info.substring(0, 200)}...`;

  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="card">
      <img src={image} alt="cards" className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {readMore ? info : description}
          <span className="read-more" onClick={clickHandler}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <button
        className="btn-red"
        onClick={() => removeTour(id)}
        style={{ display: notInterestedButton?'flex':'none' }}
      >
        Not Interested
      </button>
      <button className="btn-add" onClick={() => addTour(id)}>
        Interested
      </button>
    </div>
  );
};

export default Card;