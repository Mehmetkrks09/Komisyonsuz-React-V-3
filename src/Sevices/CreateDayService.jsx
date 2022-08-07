import axios from "axios";

export default class CreateDayService{

    getCreateDay(){
        return axios.get("http://localhost:8080/api/createDay/getall");
    }
    postCreateDay(values){
         return axios.post("http://localhost:8080/api/createDay/add",values)
    }

    getByUserId(id){
          return axios.get("http://localhost:8080/api/createDay/getByuserId?id="+id)
    }
}