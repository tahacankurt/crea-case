// eslint-disable-next-line import/no-cycle
import axios from '../../../../utils/axios';

// eslint-disable-next-line import/prefer-default-export
export const getProductsApiRequest = () =>
// /660 prefix means : User must be logged to write or read the resource.
// Further detail : https://github.com/jeremyben/json-server-auth
  axios({
    method: 'GET',
    url: '/660/products',
  }).then((response) => response.data);
