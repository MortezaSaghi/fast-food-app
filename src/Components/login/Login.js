import React from 'react';
import './Login.css'
//-----------------Package React icons
import {BiLogOut,BiLogIn} from 'react-icons/bi'

export default function Login({islogin,toggleLog}) {
  return (
    <>
        {
            islogin ? <BiLogOut className='btn-logout' onClick={toggleLog}/>
                    : <BiLogIn className='btn-login' onClick={toggleLog}/>
        }
        
    </>
  )
}
