import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import StoreShow from '../store/store_show';



class NaviBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
        }


        this.title = this.title.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.redirectToTarget = this.redirectToTarget.bind(this);
    }

    redirectToTarget(event){
        event.preventDefault();
        let storeId = this.props.currentUser.storeId;
        const shopManagerLink = store ? `/stores/${storeId}` : "/stores/new";
        this.props.history.push(shopManagerLink);
        
    }
     

    showMenu(e) {
        e.preventDefault()       
        return this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
       
        if (!this.dropdownMenu.contains(event.target)) {
        
            this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
            });  
            
        }
    }
  
            
    title() {
        return $('html,body').scrollTop(0)
    }


    render() {
        
        let {currentUser, openModal, logout} = this.props
        if (!currentUser) {
            return (
                <div>
                <div className="nav">
                    <div>
                        <Link to="/">
                            <header className="title" onClick={() => this.title()}>Shopsy!</header>
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
                                <header className="title" onClick={() => this.title()}>Shopsy!</header>
                            </Link>
                        </div >
                        <div className="search">
                            Search bar soon
                        </div>
                        <div className="menu" >
                            <button onClick={this.showMenu}>Show Menu</button>
                            {
                                this.state.showMenu ? (
                            
                                    <div className="session-menu" ref={(element) => {this.dropdownMenu = element}}>
                                        <button className="nav-button-logout" onClick={logout}>Log Out</button>
                                        <button onClick={this.redirectToTarget}> My store</button> 
                                        
                                    </div>
                                ) :
                                ( null
                                )

                            }
                        </div>
                    
                    </div>
                </div>
            )
        }
    }

    
}

export default withRouter(NaviBar);