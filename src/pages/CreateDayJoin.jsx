import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import { toast } from 'react-toastify';
import CreateDayService from '../Sevices/CreateDayService';
import UserService from '../Sevices/UserService';

export default function CreateDayJoin() {

let createDayService=new CreateDayService();
let userService = new UserService();

    const CreateDaySchema = Yup.object().shape({
       
      });


    const formik = useFormik({
        initialValues: {
        amount: 0,
        id: 0,
        paymentId: 0,
        userId: 0,
        userQueu: 0,
        month: 0,
        fullName:"",
        skt:"",
        cvc:""
      
        },
        validationSchema: CreateDaySchema,
    onSubmit: (values) => {
        console.log(values);
    // values.userId = userId;
    // createDayService.
     // jobAdService.add(values).then((result) => console.log(result.data.data));
      toast.warning(
        "İş ilanı eklendi personelin onayı ardından listelenecektir"
      );
     // console.log(values);
    },
  });

  return (
    <div>
       <Card fluid>
        <Card.Content header="Güne Katıl" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                   Miktar
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Amount"
                    value={formik.values.amount}
                    name="amount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.amount && formik.touched.amount && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.amount}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                  Ay 
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Month"
                    value={formik.values.month}
                    name="month"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.month && formik.touched.month && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.month}
                    </div>
                  )}
                </Grid.Column>
            
               
                <label style={{ fontWeight: "bold"}}>
                  Ad Soyad
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Ad Soyad"
                    value={formik.values.fullName}
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                   {formik.errors.fullName && formik.touched.fullName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.fullName}
                    </div>
                  )}
              
                <Grid.Column width={5}>
                  <label style={{ fontWeight: "bold" }}>
                  Son Kullanma Tarihi
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    placeholder="Son Kullanma Tarihi"
                    value={formik.values.skt}
                    name="skt"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.skt && formik.touched.skt && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.skt}
                    </div>
                  )}
                
                </Grid.Column>
               
                <Grid.Column width={5}>
                  <label style={{ fontWeight: "bold" }}>
                 Cvc
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Cvc"
                    value={formik.values.cvc}
                    name="cvc"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.cvc && formik.touched.cvc && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.cvc}
                    </div>
                  )}
                  
                </Grid.Column>
               

              </Grid>
              <label>3D Secure Güvenli Ödeme Kullanılmaktadır</label>
            </Form.Field>
            
            <Button
              content="Ekle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />

        </Form>
        </Card.Content>
      </Card>
    </div>
  )
}
