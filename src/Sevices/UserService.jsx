import axios from "axios";

export default class UserService {

    getUser() {
        return axios.get("http://localhost:8080/api/user/getAll");
    }
    postUser() {
        return axios.post("http://localhost:8080/api/user/add");

    }
    findById(user){
         return axios.get("http://localhost:8080/api/user/findById?id="+user)
    }
}