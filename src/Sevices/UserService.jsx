import axios from "axios";

export default class UserService {

    getUser() {
        return axios.get("http://localhost:8080/api/user/getAll");
    }
    postUser() {
        return axios.post("http://localhost:8080/api/user/add");

    }
}