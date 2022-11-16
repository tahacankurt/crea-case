import axios from '../../../utils/axios';

const loginApiRequest = ({ email, password }) => axios({
  method: 'POST',
  url: '/login',
  data: { email, password },
}).then((response) => response.data);

export default loginApiRequest;
