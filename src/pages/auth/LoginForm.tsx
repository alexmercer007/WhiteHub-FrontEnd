
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


 function LoginForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");


    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // 🔴 importantísimo

        try {
            const response = await axios.post("http://localhost:8080/login", {
                email,
                password
            });

            setErrorMsg(""); // login correcto
            localStorage.setItem("token", response.data.token);
            navigate("/feed"); // 🔥 frontend

        } catch (error) {
            setErrorMsg("Credenciales incorrectas");
        }
    }

    function goToRegister(): void {
        navigate("/register"); // 🔥 frontend
    }

    return (
        <div>
            <div className="flex relative h-[15vh] w-full bg-gray-700 justify-center items-center ">
            <header className="h-[90px] w-[250px] bg-blue-900 text-white text-4xl text-center content-center rounded-2xl border-[1px] ">WhiteHub</header>
            </div>
            <main className=" flex relative h-[73vh] w-full bg-gray-800">
                <div className=" flex relative h-full w-full border-amber-400 border-2 justify-center justify-items-center items-center">
                <form  onSubmit={handleLogin} className=" flex h-[400px] w-[350px] bg-blue-900 border-white border-2 rounded-2xl"  >
                    <fieldset className="flex h-auto w-full rounded-[2px] flex-col">
                        <div className="flex h-[200px] w-auto flex-col p-[30px]"> 
                          <label htmlFor="email" className="text-white text-[19px] mb-5.5">Email:
                              {errorMsg && (
                                  <p className="text-red-500 text-center mb-2">
                                      {errorMsg}
                                  </p>
                              )}
                              <input className=" text-black bg-white h-[35px] w-full rounded-[10px] p-3"
                                     name="email"
                                     id="email"
                                     type="text"
                                     required
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}/>
                          </label>
                          <label htmlFor='password' className="text-white text-[19px]">Password:
                              <input className="text-black bg-white h-[35px] w-full rounded-[10px] p-3"
                                     name="password"
                                     id="password"
                                     type="password"
                                     required
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)} />
                          </label>
                        </div>
                        <hr className="border-[1px]"/>
                        <div className="flex h-[200px] w-auto flex-col justify-center items-center gap-5">
                            <button className="text-[1.2rem] text-white bg-blue-600 h-[40px] w-[110px] rounded-[10px] border-2 border-white " type="submit" >Login</button>
                            <button className="text-[1.2rem] text-white bg-green-600 h-[40px] w-[110px] rounded-[10px] border-2 border-white " type="button" onClick={goToRegister}  >Register</button>
                            <a className="text-white">Forgot your password?</a>
                        </div>
                    </fieldset>
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