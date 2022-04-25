import axios from 'axios'
import { userType } from '../components/UserProfile';


const BASE_URL = 'https://gorest.co.in';

export async function userDetails() {
    const data = await axios.get<Array<userType>>(BASE_URL + '/public/v2/users');
    return data;
}

export async function userPosts() {
    const data = await axios.get(BASE_URL + '/public/v2/posts')
    return data
}

export async function userComments() {
    const data = await axios.get(BASE_URL + '/public/v2/comments')
    return data
}