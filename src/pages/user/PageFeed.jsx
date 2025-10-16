
import React from "react";
import feed from   "./../../style/PageFeed.module.css"

import settingsIcon from './../image/settings.png';
import notificationIcon from './../image/notification.png';
import chatIcon from './../image/chat.png';


function PageFeed(){
    
            return (
                    <div>
                    <div className ={feed["div__header--main"]}>
                      <header>WhiteHub</header>
                      <div className={feed["div__search--main"]} >
                        <input className={feed.page_search} id="seach" name="search" type="search" /> 
                      </div>  
                      <div className={feed["div__button"]} >
                      <button className ={feed["button__settings"]} type="button">
                      <img className ="img__settings" src={settingsIcon} alt=""  />
                      </button>
                      <button className ={feed["button__notification"]} type="button">
                      <img className ={feed["img__notification"]} src={notificationIcon} alt="" />
                      </button>
                      <button className ={feed["button__message"]} type="button">
                      <img className ={feed["img__message"]} src={chatIcon} alt="" />
                      </button>
                      <button className ={feed["button__user"]} type="button">
                        <img className ={feed["img__user"]} src="" alt="" onError={(e) => (e.target.src = "/image/default-user.png")} />
                      </button>
                      </div>
                    </div>
                    
                   {/* Box Personal Follower */}
                    <aside>
                      <section>
                         <article>
                            <h2>
                              <span>Following: </span>
                            </h2>
                            <span> </span>
                            <p>
                              <span>Comunity: </span>
                            </p>
                            <span> </span>
                            <h2>
                              <span></span>
                            </h2>  
                            </article> 
                         </section>                     
                    </aside>
                    
                    <main>
                    <article>
                    <div>
                        <button type="button">
                        <img/> 
                        <span>Nombre:????</span>    
                       </button>
                        <input type="search" placeholder="Que estas haciendo?"/>
                      </div>
                      <div>
                        <button> Video <input type="file" /></button>
                        <button>Photo<input type="file" /></button>
                        <button>Text<input type="text" /></button>
                      </div>                  
                    </article>
                    </main>
                    
                    <aside>
                      <div>
                        <button type="button">
                        <img/> 
                        <span></span>    
                       </button>
                      </div>
                      <div>
                        <button type="button">
                        <img/> 
                        <span></span>    
                       </button>
                      </div>
                    </aside>
                    <footer></footer>
                    </div> ); 
                    
}

export default PageFeed;