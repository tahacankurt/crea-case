import React, { useSelector } from 'react-redux';

function TechnicalSpecification() {
  const comments = useSelector((state) => state.product.detail.comment.payload);
  return (
    <h1>
      Technical Specification
      {comments.length}
    </h1>
  );
}

export default TechnicalSpecification;
