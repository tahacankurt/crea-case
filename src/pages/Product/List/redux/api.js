import axios from '../../../../utils/axios';

// /660 prefix means : User must be logged to write or read the resource.
// Further detail : https://github.com/jeremyben/json-server-auth
const getProductsApiRequest = () => axios({
  method: 'GET',
  url: '/660/products',
}).then((response) => response.data);

export default getProductsApiRequest;
