


function ButtonMessenge(){

     return(
        <div>
           <div className="fixed flex w-[300px] h-[300px] gap-1.5 justify-center items-center flex-col border-2 rounded-2xl border-white bg-gray-900 top-[68px] right-[35px]">
                <div className="flex relative w-[280px] h-[55px] bg-gray-400 border-2 justify-center items-center rounded-2xl border-white m-1.5">
                    <label className="flex w-[250px] h-[60px] bg-gray-600 items-center ">
                        <img className="flex w-[100px] h-[50px]"/> <span className="m-2">Configuration</span>
                    </label>
                </div>
                <div className="w-[100%] h-[250px] flex border-2 border-amber-500 justify-center items-center flex-col gap-2.5">
                    <button className="w-[200px] h-[40px] bg-blue-300 border-2 border-white rounded-2xl">
                        <img className=""/> 
                        <span className="text-white font-semibold">Configuración</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonMessenge;