import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Header.css';

function Header(props) {
  let set_logout = {props}.props.setLoading;
  const handler = async() => {
    const result = await axios.get('https://guarded-chamber-88701-7c7ee3d58107.herokuapp.com/logout');
    set_logout(result.data);
    console.log('result: ', result.data);
  }
    return (
        <div className="Header">
          <h1>SFPOPOS</h1>
                <div className="Header-Subtitle">San Franciscos Privately Owned Public Spaces</div>
                <div className='Log'>
                    <button type="button" onClick={handler}>
                      Logout
                    </button>
                </div>    
        </div>
      )
}

export default Header