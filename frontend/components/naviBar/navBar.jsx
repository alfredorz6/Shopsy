import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StoreShow from '../store/store_show';
import { FaShoppingCart, FaStore, FaUserAlt } from "react-icons/fa";
import SearchBar from '../searchBar/search_bar';



class NaviBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
        }


        this.title = this.title.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.redirectToCart = this.redirectToCart.bind(this)
        this.redirectToTarget = this.redirectToTarget.bind(this);
        
    }

    redirectToTarget(event){
        event.preventDefault();
        let storeId = this.props.currentUser.storeId;
        const shopManagerLink = storeId ? `/stores/${storeId}` : "/stores/new";
        this.props.history.push(shopManagerLink);
        
    }

    redirectToCart(event){
        event.preventDefault();
        this.props.history.push('/cart_items')
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
                <div className="nav">
                    <div className='upper-bar' >
                        <div>
                            <Link to="/">
                                <header className="title" onClick={() => this.title()}>Shopsy!</header>
                            </Link>                             
                        </div >
                        <div className="search">
                                <SearchBar/>
                        </div>
                        <div className="modal">
                        <button className='cart-button1' onClick={this.redirectToCart}><FaShoppingCart/></button>
                            <button onClick={() => openModal('login')} className='nav-button-login'>Login</button>
                        </div>

                    
                    </div>
                    <div className='lower-bar'>
                            <ul className='lower-bar-ul'>
                                <li>Jewelry & Accesories</li>
                                <li>Clothing & Shoes</li>
                                <li>Home & Living</li>
                                <li>Wedding & Party</li>
                                <li>Toys & Entertainment</li>
                                <li>Art & Collectibles</li>
                                <li>Craft Supplies</li>

                            </ul>
                        </div>

                </div>
            )
        } else {
            return(
                

                <div>
                    <div className="nav">
                        <div className='upper-bar'>
                            <div>
                                <Link to="/">
                                    <header className="title" onClick={() => this.title()}>Shopsy!</header>
                                </Link>
                            </div >
                            <div className="search">
                                <SearchBar/>
                            </div>
                            <div className="menu" >
                                <button className='cart-button1' onClick={this.redirectToCart}><FaShoppingCart/></button>
                                <br/>
                                <button className='cart-button' onClick={this.redirectToTarget}><FaStore/></button> 
                                <br/>
                                <div className='drop-menu'>
                                    <button className='cart-button' onClick={this.showMenu}><FaUserAlt/></button>

                                    {
                                        this.state.showMenu ? (
                                    
                                            <div className="session-menu" ref={(element) => {this.dropdownMenu = element}}>
                                                <button className="nav-button-logout" onClick={logout}>Log Out</button>
                                                
                                                
                                            </div>
                                        ) :
                                        ( null
                                        )

                                    }
                                </div>
                            </div>
                           
                        </div>
                        <div className='lower-bar'>
                            <ul className='lower-bar-ul'>
                                <li>Jewelry & Accesories</li>
                                <li>Clothing & Shoes</li>
                                <li>Home & Living</li>
                                <li>Wedding & Party</li>
                                <li>Toys & Entertainment</li>
                                <li>Art & Collectibles</li>
                                <li>Craft Supplies</li>

                            </ul>
                        </div>
                    
                    </div>
                </div>
            )
        }
    }

    
}

export default withRouter(NaviBar);