import axios from "axios";

export default class UserService {

    getUser() {
        return axios.get("http://localhost:8080/api/user/getAll");
    }
    postUser(values) {
        return axios.post("http://localhost:8080/api/user/add",values);

    }
    findById(user){
         return axios.get("http://localhost:8080/api/user/findById?id="+user)
    }
    postPhoto(id,fd){
          return axios.post("http://localhost:8080/api/user/imageUpload?userId="+id,fd)
    }
}