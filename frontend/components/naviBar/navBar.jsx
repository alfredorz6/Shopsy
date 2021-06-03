import React from 'react';
import { Link } from 'react-router-dom';


const NaviBar = ({ currentUser, openModal, logout }) => { 
            
    const title = () => {
        $('html,body').scrollTop(0)
    }
    if (!currentUser) {
        return (
            <div>
            <div className="nav">
                <div>
                    <Link to="/">
                        <header className="title" onClick={title()}>Shopsy!</header>
                    </Link>                             
                </div >
                <div className="search">
                        Search bar soon
                </div>
                <div className="modal">
                    <button onClick={() => openModal('login')} className='nav-button-login'>Login</button>
                </div>

               
            </div>
        </div>
        )
    } else {
        return(
             

            <div>
                <div className="nav">
                    <div>
                        <Link to="/">
                            <header className="title" onClick={title()}>Shopsy!</header>
                        </Link>
                    </div >
                    <div className="search">
                        Search bar soon
                    </div>
                    <div className="end-session">
                        <button className="nav-button-logout" onClick={logout}>Log Out</button>
                    </div>
    
                   
                </div>
            </div>
        )
    }
    

    
}

export default NaviBar;

