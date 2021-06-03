import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = ({logout, currentUser}) => {
    const title = () => {
        $('html,body').scrollTop(0)
    }

    return(
        <div>
            <div className="nav">
                <div>
                    <Link to="/">
                        <header className="title" onClick={() => this.title()}>Shopsy!</header>
                    </Link>
                </div >
                <div className="search">
                    soon
                </div>
                <div className="buttons">
                    Sing in button here soon
                </div>
            </div>
        </div>
    )
}

export default NaviBar;

