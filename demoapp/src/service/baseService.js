import axios from 'axios';

export const baseurl='https://reqres.in/api';

const baseService=axios.create({
    baseURL:baseurl
})
export default baseService;