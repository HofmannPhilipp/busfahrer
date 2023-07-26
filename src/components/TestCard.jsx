import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import ReactCardFlip from "react-card-flip";

function TestCard({ src, isFlipped, enableOnClick }, ref) {
  const [flip, setFlip] = useState(isFlipped);
  const backRef = useRef();
  const frontRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        backOnClick: () => console.log(src),
        frontOnClick: () => frontRef.current.onClick(),
      };
    },
    []
  );

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
        ref={backRef}
        src={"cards/back.png"}
        onClick={handleFlip}
        alt=""
        className="h-full"
      />
      {src && (
        <img
          ref={frontRef}
          onClick={handleFlip}
          src={`cards/${src}`}
          className="h-full"
        />
      )}
    </ReactCardFlip>
  );
}

export default React.forwardRef(TestCard);
