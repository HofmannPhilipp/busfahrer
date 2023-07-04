import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
function Card({ id, isFlipped, enableOnClick }) {
  const [flip, setFlip] = useState(isFlipped);

  useEffect(() => {
    setFlip(isFlipped);
  }, [isFlipped]);

  function handleFlip() {
    if (!enableOnClick) return;
    setFlip(!flip);
  }
  return (
    <ReactCardFlip isFlipped={flip} containerClassName="h-full">
      <img
        src={`/cards/back.png`}
        onClick={handleFlip}
        alt=""
        className="h-full"
      />
      {id && (
        <img
          onClick={handleFlip}
          src={`cards/${id}`.concat(".png")}
          className="h-full"
        />
      )}
    </ReactCardFlip>
  );
}

export default Card;
