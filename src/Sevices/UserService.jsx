import axios from "axios";

export default class UserService {

    getUser() {
        return axios.get("http://localhost:8080/api/user/getAll");
    }
    postUser(values) {
        return axios.post("http://localhost:8080/api/user/add",values);

    }
    findById(id){
         return axios.get("http://localhost:8080/api/user/findById?id="+id)
    }
    postPhoto(id,fd){
          return axios.post("http://localhost:8080/api/user/imageUpload?userId="+id,fd)
    }
    updateUser(id,adress,password,email){
          return axios.put("http://localhost:8080/api/user/UpdateUser?adress="+adress+"&email="+email+"&id="+id+"&password="+password)
    } 
    getByMail(mail){
        return axios.get("http://localhost:8080/api/user/findByMail?mail="+mail);
    }
}