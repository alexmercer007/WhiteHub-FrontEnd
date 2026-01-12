
import React, {useState} from "react";
import feed from "../../style/PageFeed.module.css"

import FeedSearchBar from "../feed/components/FeedSearchBar"


import settingsIcon from "../image/settings.png";
import notificationIcon from '../image/notification.png';
import chatIcon from '../image/messenger.png';
import userIcon from '../image/default-user.png';




function FeedPage(){

            return (
                    <div >
                        <FeedSearchBar/>
                    <footer></footer>
                    </div> ); 
                    
}

export default FeedPage;