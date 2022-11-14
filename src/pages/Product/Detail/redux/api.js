import axios from "../../../../utils/axios";

export const getProductApiRequest = (productId) => {
    // /660 prefix means : User must be logged to write or read the resource.
    // Further detail : https://github.com/jeremyben/json-server-auth
    return axios({
        method: 'GET',
        url: `/660/products/${productId}`,
    }).then(response => {
        return response.data
    })
}

export const getProductCommentsApiRequest = (productId) => {
    // /660 prefix means : User must be logged to write or read the resource.
    // Further detail : https://github.com/jeremyben/json-server-auth
    return axios({
        method: 'GET',
        url: `/660/products/${productId}/comments?_sort=id&_order=desc`,
    }).then(response => {
        return response.data
    })
}

export const createCommentApiRequest = ({productId,body}) => {
    // /660 prefix means : User must be logged to write or read the resource.
    // Further detail : https://github.com/jeremyben/json-server-auth
    return axios({
        method: 'POST',
        url: `/660/products/${productId}/comments/`,
        data:{body}
    }).then(response => {
        return response.data
    })
}