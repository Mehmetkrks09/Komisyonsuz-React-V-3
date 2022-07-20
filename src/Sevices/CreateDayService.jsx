import axios from "axios";

export default class CreateDayService{

    getCreateDay(){
        return axios.get("http://localhost:8080/api/createDay/getall");
    }
}