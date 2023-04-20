import Qs from 'qs'
import env from './env.js'

export let header = {
    baseURL: env.serveHost,
    transformRequest: [function (data) {
        return Qs.stringify(data);
    }],
    transformResponse: [function (data) {
        return data
    }],
    headers: {
        // 'Content-Type': 'json',
    },
    timeout: 60*1000*5, // 5分钟
    responseType: 'json'
};

export let header_file = {
    baseURL: env.serveHost,
    transformRequest: [function (data) {
        return data;
    }],
    transformResponse: [function (data) {
        return data
    }],
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    timeout: 60*1000*30, // 30分钟
    responseType: 'json'
}
