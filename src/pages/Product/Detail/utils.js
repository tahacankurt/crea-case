// eslint-disable-next-line import/prefer-default-export
export const calculateAverageRate = (
  comments,
) => {
  if (comments.length) {
    return Math.round(comments.reduce((acc, comment) => (acc + comment.rate), 0) / comments.length);
  } return null;
};
