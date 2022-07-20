import axios from "axios";

export default class PaymentService{

    getPayment(){
        return axios.get("http://localhost:8080/api/payment/getAll");
    }
}