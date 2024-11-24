import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
 export let Navbar = (props) => {
   return (
   <nav className='nav'>
    <li style={{fontFamily:'cursive',color:'gold',fontSize:'3vw'}}>{props.title}</li>
    <li style={{'paddingLeft': '2vw','fontSize':'2.2vw'}}><Link className='abc' to='/'>General</Link></li>
    <li style={{'paddingLeft': '2vw','fontSize':'2.2vw'}}><Link className='abc' to='/business'>Business</Link></li>
    <li style={{'paddingLeft': '2vw','fontSize':'2.2vw'}}><Link className='abc' to='/technology'>Technology</Link></li>
    <li style={{'paddingLeft': '2vw','fontSize':'2.2vw'}}><Link className='abc' to='/health'>Health</Link></li>
   </nav>
   );
}
