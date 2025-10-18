
import React from "react";
import feed from   "./../../style/PageFeed.module.css"

import settingsIcon from './../image/settings.png';
import notificationIcon from './../image/notification.png';
import chatIcon from './../image/messenger.png';
import userIcon from './../image/default-user.png';

function PageFeed(){
    
            return (
                    <div >
                        <div className ={feed["div__header--main"]}>
                            <header>WhiteHub</header>
                            <div className={feed["div__search--main"]} >
                                <input className={feed.page_search} id="seach" name="search" type="search" /> 
                            </div>  
                      
                      <div className={feed["div__button"]} >
                          <button className ={feed["button__settings"]} type="button">
                              <img className ="img__settings" src={settingsIcon} alt=""  />
                              <span></span>
                          </button>
                          <button className ={feed["button__notification"]} type="button">
                              <img className ={feed["img__notification"]} src={notificationIcon} alt="" />
                              <span></span>
                          </button>
                          <button className ={feed["button__message"]} type="button">
                              <img className ={feed["img__message"]} src={chatIcon} alt="" />
                              <span></span>
                          </button>
                          <button className ={feed["button__user"]} type="button">
                              <img className ={feed["img__user"]} src={userIcon} alt="" onError={(e) => (e.target.src = "/image/default-user.png")} />
                          </button>
                      </div>
                    </div>
                    
    <div className={feed["div__main--page"]} >
                    
                   {/* Box Personal Follower */}
                    <aside className={feed["aside__right"]}>
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
                    <div>
                    <div className={feed["div__main--userState-file"]}>                  
                        <button className={feed["button__user-file"]} type="button">
                        <img/>     
                       </button>
                        <input className={feed["input__main--userState"]} type="search" placeholder="Que estas haciendo?"/>
                      </div>
                      <div className={feed["div__Main--file"]}>
                          <button className={feed[""]}> texto
                              <img src="text.png" alt="Subir texto" />
                          </button>
                          <label className={feed[""]}>Photo
                              <img src="photo-icon.png" alt="Subir imagen" />
                              <input type="file" accept="image/*" hidden/>
                          </label>
                          <label className={feed[""]}>Text
                              <img src="photo-icon.png" alt="Subir imagen" />
                              <input type="text" accept="image/*" hidden />
                          </label>
                      </div>                                                 
                     </div>
                    </main>
                    
                    <aside className={feed["aside__left"]}>
                      <div className={feed["div__userBox"]}>
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
   
  </div> 
                    <footer></footer>
                    </div> ); 
                    
}

export default PageFeed;