import axios from 'axios';

export class API {
    constructor (baseUrl) {
        this.baseUrl = baseUrl;
        this.proxyUrl = "https://cors-anywhere.herokuapp.com/";
    }

    makeRequest({parameters, method, data}) {
        return axios({
            url:`${this.proxyUrl}${this.baseUrl}?${parameters}&format=json`,
            method,
            data
        }).then(data => data.data);
    }

}

export default new API('http://openlibrary.org/api/books');