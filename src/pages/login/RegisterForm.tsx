
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import componentsRG from '../components/ComponentsRegister';
import listCountry from "../components/ListCountry";
import './../../style/register.css';

import axios from "axios";

function RegisterForm() {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });
};


const [successMessage, setSuccessMessage] = useState<string | null>(null);
const [errorMessage, setErrorMessage] = useState<string | null>(null);

const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // limpiar mensajes anteriores
  setSuccessMessage(null);
  setErrorMessage(null);

  try { 
    const response = await axios.post(
      "http://localhost:8080/register",
      formData
    );

    // 🔍 ver exactamente qué manda el backend
    console.log("SUCCESS RESPONSE:", response.data);

    // asumir que el backend devuelve { message: "..." }
    setSuccessMessage(response.data.message);

    // redirección (normalmente con un pequeño delay)
    setTimeout(() => {
      navigate("/login");
    }, 1500);

  } catch (error: any) {

    // 🔍 ver el error completo
    console.error("ERROR RESPONSE:", error);

    // Axios guarda la respuesta del backend aquí
    if (error.response && error.response.data) {
      setErrorMessage(error.response.data.error);
    } else {
      setErrorMessage("Unexpected error");
    }
  }
};



    return (
        <div className="register__page ">
            <header className="register__header">WhiteHub</header>
            <main className="register__main">
                <form className="register__form" onSubmit={handleSubmit} >
                    <fieldset className="register__fieldset">
                        <label htmlFor="name" className="register__label">Name:</label>
                         <input className="register__input" id="name" name="name" type="text" value={formData.name} onChange={handleChange}/>
                        <label htmlFor="lastName" className="register__label">Last Name:</label>
                         <input className="register__input" id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange}/>
                        <label htmlFor="userName" className="register__label">User Name:</label>
                         <input className="register__input" id="userName" name="userName" type="text" value={formData.userName} onChange={handleChange}/>
                        <label htmlFor="email" className="register__label">Email:</label>
                         <input className="register__input" id="email" name="email" type="email" value={formData.email} onChange={handleChange}/>
                        <label htmlFor="password" className="register__label">Password:</label>
                         <input className="register__input" id="password" name="password" type="password" value={formData.password} onChange={handleChange}/>
                         <label htmlFor="confirmPassword" className="register__label">Confirm Password:</label>
                         <input className="register__input" id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange}/>
                        <hr className="register__hr" />
                        <div className="register__div_button">
                         <button className="register__button_register" type="submit" >Register</button> 
                        </div>                    
                    </fieldset>
                </form>
            </main>
            <footer className="register__footer">Terms and conditions</footer>
        </div>
    )

}

export default RegisterForm;