import LocalStorage from "./localStorage";
import axios from "axios";
import {API_URL} from "../constants/api";
import {useState} from "react";

const jwtInterceptor = (instance) => {
    const localStorage = new LocalStorage({key: 'auth'});
    instance.interceptors.request.use(config => {
        Object.assign(config.headers, {
            Authorization: `Bearer ${localStorage.item?.accessToken}`
        })
        return config;
    })

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const config = error?.config;
            if (error?.response?.status === 401) {
                // TODO: Refactor
                window.location.replace('/login')
                return axios(config);
            }
            return Promise.reject(error);
        }
    );
}

const instance = axios.create({baseURL: API_URL})

jwtInterceptor(instance);

export default instance;