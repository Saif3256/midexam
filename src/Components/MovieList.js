import React from "react";

import "./MovieList.css";
function Card({ card }) {
  return (
    <div className="card-info-flex">
      <h3 className="card-title">{'Bodyguard'}</h3>
      <div className="card-rating">
        
          <p>{'3.7'}</p>
      </div>
     
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{'Horror movie'}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{'2007'}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>₹{'20'}</span> night
      </p>
   
    </div>
  );
}

function Multiple_Cards({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Multiple_Cards;


