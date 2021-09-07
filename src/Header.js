import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Link } from 'react-router-dom'
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import { useState } from 'react';


function Header() {

    const [{basket, loggedinusre}, dispatch] = useStateValue();

    const logoutUser = () => {
        if(loggedinusre){
            auth.signOut();
        }
    }
    const [searchTerm, setSearchTerm] = useState('');

 
   return(
       
       <nav className="header">
           <Link to='/'>
           <img className="header-logo" src=""  alt="logo" src="http://pngimg.com/uploads/simpsons/simpsons_PNG92.png"/>
           </Link>
           <div className="header-search">
                <input type="text" className="header-searchInput" placeholder="Search..." onChange={(event) => {
                    setSearchTerm(event.target.value)}
                }/>
                <SearchIcon className="header-searchIcon" />
           </div>
           <div className="header-nav">
                {/* 1 link */}
                <Link to={!loggedinusre && "/login"} className="header-link">
                    <div onClick={logoutUser} className="header-option">
                        <span className="header-optionLineOne">Hello, {loggedinusre?.email}</span>
                        <span className="header-optionLineTwo">{loggedinusre ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link> 
            {/* 2 link */}
                {/* <Link to='/' className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Returns</span>
                        <span className="header-optionLineTwo"> Orders</span>
                    </div>
                </Link>  */}
           
           
            </div>
             {/*basket  */}
            <Link to="/checkout" className="header-link"> 
                <div className="header-optionBasket">
                    <ShoppingBasket/>
                    {/* number of items in the basket */}
                    <span className="header-productCount">{basket?.length}</span>
                </div>
            </Link>
       </nav>
    
   )
}

export default Header;