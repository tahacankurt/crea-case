import LocalStorage from "./localStorage";
import axios from "axios";
import {API_URL} from "../constants/api";

const jwtInterceptor = (instance) => {
    const localStorage =new LocalStorage({key:'user'});
    instance.interceptors.request.use(config=>{
        Object.assign(config.headers,{
            token: localStorage.item?.token
        })
        return config;
    })
}

const instance = axios.create({baseURL:API_URL})

jwtInterceptor(instance);

export default instance;