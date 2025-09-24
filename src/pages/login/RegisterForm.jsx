
import React from "react";
import componentsRG from './../components/ComponentsRegister';
import listCountry from "../components/ListCountry";
import './../../style/register.css';

function RegisterForm() {

return (
    <div className=" h-[100vh] bg-gray-500">
        <div className=" h-[100px] w-full flex justify-center items-center  ">
        <header className=" flex text-white text-3xl h-[80px] w-[200px] bg-blue-400 rounded-2xl justify-center items-center  ">WhiteHub</header>
        </div>
        <main className=" flex bg-gray-800 h-auto w-full ">
            <div className=" flex h-auto w-full justify-center items-center ">
                <form className=" h-[800px] w-[550px] c-ft rounded-2xl m-8   ">
                    <fieldset className=" w-auto p-8 ">
                        { componentsRG.map((label, index) =>(
                        <div key={index} className="pb-5">
                            <label className="text-white text-[1.2rem]" html={label.htmlFor} >{label.label}
                            <input className="h-[40px] w-[485px] bg-gray-700 border-2 rounded-2xl p-3 " id={label.input.id} name={label.input.name} placeholder={label.input.placeholder} type={label.input.type} ></input>
                            </label>
                        </div>                   
                        ))} 
                        <div className=" flex gap-3 flex-col " >
                        <select className=" h-[40px] bg-gray-700 rounded-[8px] text-[1.1rem] text-white " id="country">
                        { listCountry.map((option, index2) =>(                         
                          <option key={index2} value={option}>{option}</option>                       
                        ))}
                        </select>
                        </div>
                        <div className=" flex h-[100px] w-auto justify-center items-center ">
                            <button className=" text-[1.2rem] text-white h-[40px] w-[130px] bg-green-500 rounded-[8px] cursor-pointer hover:bg-green-600 active:bg-green-700 hover:scale-105 active:scale-95 
             transition-transform duration-150">Register</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
        <footer className=" h-[80px] w-full flex justify-center items-center ">
            <a className=" text-[1.2rem] text-white   ">Terms and Conditions</a>
        </footer>
    </div>
)

}

export default RegisterForm;