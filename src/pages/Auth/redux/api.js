import axios from "../../../utils/axios";


export const loginApiRequest = ({email, password}) => {
    return axios({
        method: 'POST',
        url: '/login',
        data: {email, password},
    }).then(response => {
        return response.data
    })
}