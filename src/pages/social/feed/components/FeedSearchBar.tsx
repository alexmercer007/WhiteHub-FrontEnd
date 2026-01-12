

function FeedSearchBar(){

    return(

        <div className="relative border-blue-600">
            <header className="relative h-[100px] w-[98%] bg-gray-600  border-blue-600 ">
                <div className=" relative h-[100px] w-[25%] bg-red-700">
                    <button id="user" type="button">hola</button>
                    <span>username</span>
                </div>
                <div className="relative h-[100px] w-[50%] bg-red-600 justify-items-center ">
                <input id="search" type="search"  className="h-[70px] w-[40%] bg-blue-900"/>
                </div>
                <div className=" relative h-[100px] w-[25%] bg-yellow-400 ">
                    <button id="notifications" type="button"className="" >
                        <img alt="" src=""/> // notificacion
                    </button>
                    <button id="settings" type="button" className="">
                        <img alt="" src=""/> // setting
                    </button>
                    <button id="userProfile" type="button" className="">
                        <img alt="" src="" /> // userProfile
                    </button>
                </div>
            </header>
        </div>
    )

}

export default  FeedSearchBar;