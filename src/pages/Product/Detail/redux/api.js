import axios from '../../../../utils/axios';

// /660 prefix means : User must be logged to write or read the resource.
// Further detail : https://github.com/jeremyben/json-server-auth
export const getProductApiRequest = (productId) => axios({
  method: 'GET',
  url: `/660/products/${productId}`,
}).then((response) => response.data);

export const getProductCommentsApiRequest = (productId) => axios({
  method: 'GET',
  url: `/660/products/${productId}/comments?_sort=id&_order=desc`,
}).then((response) => response.data);

export const createCommentApiRequest = ({ productId, commentDetail }) => axios({
  method: 'POST',
  url: `/660/products/${productId}/comments/`,
  data: { ...commentDetail },
}).then((response) => response.data);
