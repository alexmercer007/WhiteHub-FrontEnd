



function ButtonUser() {

    return (
        <div>
            <div className="fixed flex w-[300px] h-[200px] bg-blue-500 top-[68px] right-[35px] justify-center items-center flex-col ">
                <div className="flex w-[285px] h-[100px]">
                    <label className="flex w-[280px] h-[200px]">
                        <img className=""/>
                        <span></span>
                    </label>
                </div>
                <div className="flex w-[300px] h-[100px]">
                    <button className="flex w-[200px] h-[50px]">Personal Information</button>
                    <button className="flex w-[200px] h-[50px]"></button>
                    <button className="flex w-[200px] h-[50px]">LogOut</button>
                </div>
            </div>
        </div>
    );
}

export default ButtonUser;