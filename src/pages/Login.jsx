import React from 'react'
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import {
    Button,
    TextArea,
    Card,
    Form,
    Input,
} from "semantic-ui-react";
import { toast, Toastify } from "react-toastify";
import UserService from "../Sevices/UserService";
import SignedIn from '../layouts/SignedIn';
import SignedOut from '../layouts/SignedOut';


export default function Login({signIn}) {

   
function Login(values) {
    if (values.email == user.email && values.password == user.password) {

        history.push("/createDay")

       



    }
    else
    {
        console.log("Şifre Veya Email Hatalı");
    }
    
}

    let userService = new UserService();


    
    const [user, setUser] = useState({})
    const history =useHistory()

    // const [isAuthenticated, setIsAuthenticated] = useState(false)
  
    // function handleSignOut() {
    //   setIsAuthenticated(false)
    //   // history.push("/")
    //  history.push("/")
    // }
  
    // function handleSignIn() {
    //   setIsAuthenticated(true)
    //   //history.push("/createDay")
    // }


    const UserAdSchema = Yup.object().shape({
        // name: Yup.string().required("Bu Alan Boş Bırakılamaz"),
        // surName: Yup.string().required("Bu Alan Boş Bırakılamaz"),
        // email: Yup.string().email("Geçerli Bir Mail Giriniz").required("Boş Bırakılamaz"),
        // password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),





    });

    const formik = useFormik({
        initialValues: {

            email: "",
            password: "",

        },



        validationSchema: UserAdSchema,
        onSubmit: (values) => {
            //  console.log(values);
            userService.getByMail(values.email).then(result => setUser(result.data.data))
            //  console.log(users.email);
            
            Login(values);
           
            onclick={signIn}
                
        },

    });

   


    return (
        <div>
            <Card fluid inverted="top">
                <Card.Content header="Giriş Yap" />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>

                        <Form.Field>
                            <label>Email </label>
                            <input type={"text"}
                                placeholder="Email..."

                                error={Boolean(formik.errors.email).toString()}
                                value={formik.values.email}
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.email}
                                </div>
                            )}
                        </Form.Field>

                        <Form.Field>
                            <label>Password </label>
                            <input type={"password"}
                                placeholder="Password..."

                                error={Boolean(formik.errors.password).toString()}
                                value={formik.values.password}
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.password}
                                </div>
                            )}
                        </Form.Field>


                        <Button
                            content="Giriş Yap"
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
