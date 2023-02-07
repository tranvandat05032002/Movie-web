import axios from "axios";

export default function requestFetchData(query = ""){
    return axios.request({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/315162?api_key=2537abce0574afa219f72b4d7aacde04&language=en-US",
        params: {
            query
        }
    })
}