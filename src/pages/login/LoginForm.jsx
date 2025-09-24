
import {useState} from "react";


function LoginForm() {

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle_login = async() => {

    
  }

    return (
        <div>
            <div className="flex relative h-[15vh] w-full bg-gray-700 justify-center items-center ">
            <header className="h-[90px] w-[250px] bg-blue-900 text-white text-4xl text-center content-center rounded-2xl border-[1px] ">WhiteHub</header>
            </div>
            <main className=" flex relative h-[73vh] w-full bg-gray-800">
                <div className=" flex relative h-full w-full border-amber-400 border-2 justify-center justify-items-center items-center">
                <form className=" flex h-[400px] w-[350px] bg-blue-900 border-white border-2 rounded-2xl">
                    <field className=" flex h-auto w-full rounded-[2px] flex-col">
                        <div className="flex h-[200px] w-auto flex-col p-[30px]"> 
                          <label className="text-white text-[19px] mb-5.5">Email: <input className=" text-black bg-white h-[35px] w-full rounded-[10px] p-3" ></input></label>
                          <label className="text-white text-[19px]">Password: <input className="text-black bg-white h-[35px] w-full rounded-[10px] p-3" ></input></label>
                        </div>
                        <hr className="border-[1px]"/>
                        <div className="flex h-[200px] w-auto flex-col justify-center items-center gap-5">
                            <button className="text-[1.2rem] text-white bg-blue-600 h-[40px] w-[110px] rounded-[10px] border-2 border-white ">Login</button>
                            <button className="text-[1.2rem] text-white bg-green-600 h-[40px] w-[110px] rounded-[10px] border-2 border-white ">Register</button>
                            <a className="text-white">Forgot your password?</a>
                        </div>
                    </field>
                </form>
                </div>
            </main>
            <footer className=" flex h-[80px] w-full border-blue-700 border-2 justify-center items-center ">
              <a className=" text-white ">Terms and Conditions</a>
            </footer>
        </div>
    )
}

export default LoginForm;