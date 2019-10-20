import axios from 'axios';

// 리스트 조회
// keyword : 이름
// export const getSearchList = ({keyword}) => axios.get(`api/users/${keyword}`);
export const getSearchList = () => axios.get(`https://api.github.com/users`);
// export const getSearchList = () => axios.get(`/api/users`);
