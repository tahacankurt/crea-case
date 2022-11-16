/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function Star({
  setHoverRating, index, hoverRating, rate, setRate, disabled,
}) {
  const isActive = () => ((hoverRating || rate) > index);

  return (
    <button
      type="button"
      className="mx-1"
      disabled={disabled}
      onClick={() => { setRate(index + 1); }}
      onMouseEnter={() => { if (!disabled) setHoverRating(index + 1); }}
      onMouseLeave={() => { if (!disabled) setHoverRating(undefined); }}
    >
      <svg
        aria-hidden="true"
        className={`w-5 h-5 text-${isActive() ? 'yellow' : 'gray'}-400 inline ${disabled && 'opacity-50'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </button>
  );
}

const starArr = Array(5).fill(0);

function StarRater({ rate, setRate, disabled }) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div>
      {starArr.map((_, index) => (
        <Star
          disabled={disabled}
          setHoverRating={setHoverRating}
          key={index}
          hoverRating={hoverRating}
          index={index}
          rate={rate}
          setRate={setRate}
        />
      ))}
    </div>
  );
}

export default StarRater;
