import axios from 'axios'
import { CommentType, PostType, userType } from '../model/Models';


const BASE_URL = 'https://gorest.co.in';

export async function userDetails() {
    const data = await axios.get<Array<userType>>(BASE_URL + '/public/v2/users');
    return data;
}

export async function userPosts(userId: number) {
    const data = await axios.get<Array<PostType>>(BASE_URL + `/public/v2/users/${userId}/posts`)
    return data
}

export async function userComments(postId: number) {
    const data = await axios.get<Array<CommentType>>(BASE_URL + `/public/v2/posts/${postId}/comments`)
    return data
}