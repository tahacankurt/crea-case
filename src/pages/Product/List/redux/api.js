import axios from "../../../../utils/axios";

export const getProductsApiRequest = () => {
    // /660 prefix means : User must be logged to write or read the resource.
    // Further detail : https://github.com/jeremyben/json-server-auth
    return axios({
        method: 'GET',
        url: '/660/products',
    }).then(response => {
        return response.data
    })
}