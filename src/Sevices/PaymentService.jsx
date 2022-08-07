import axios from "axios";

export default class PaymentService{

    getPayment(){
        return axios.get("http://localhost:8080/api/payment/getAll");
    }
    updatePayment(dayId,userId){
        return axios.put("http://localhost:8080/api/payment/paymentUpdate?dayId="+dayId+"&state=true&user%C4%B0d="+userId)
    }
}