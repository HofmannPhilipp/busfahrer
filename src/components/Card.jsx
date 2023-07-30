import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";

function Card({ src, isFlipped, enableOnClick }) {
  const [flip, setFlip] = useState(isFlipped);

  useEffect(() => {
    setFlip(isFlipped);
  }, [isFlipped]);

  function handleFlip() {
    if (!enableOnClick) return;
    setFlip(!flip);
  }
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full"
    >
      <ReactCardFlip isFlipped={flip} containerClassName="h-full">
        <img
          src={"cards/back.png"}
          onClick={handleFlip}
          alt=""
          className="h-full"
        />
        {src && (
          <img onClick={handleFlip} src={`cards/${src}`} className="h-full" />
        )}
      </ReactCardFlip>
    </motion.div>
  );
}

export default Card;
