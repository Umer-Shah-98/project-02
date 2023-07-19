import React from 'react'
import HomeIcon from '../../assets/home-icon.png'
import ExpensesIcon from '../../assets/expenses-icon.png'
import WalletIcon from '../../assets/wallet-icon.png'
import SettingsIcon from '../../assets/settings-icon.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function NavBar({color,style}) {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div style={style} className={`flex justify-center items-center navbar m-3 rounded-l-lg bg-${color}`}>
      <ul className='flex justify-center items-center flex-col'>
        <li className={`m-5 home-icon`}><NavLink to="/home"><div className='rounded-md'><img src={HomeIcon} alt="" /></div ></NavLink></li>
        <li className={`m-5 wallet-icon icon-size`}><NavLink to="/wallet"><div className={`rounded-md bg-{}`}><img src={WalletIcon} alt="" /></div></NavLink></li>
        <li className='m-5 expenses-icon icon-size'><NavLink to="/expenses"><div className='rounded-md w-8.5 h-8'><img src={ExpensesIcon} alt="" /></div></NavLink></li>
        <li className='m-5 settings-icon icon-size'><NavLink to="/settings"><div className='rounded-md'><img src={SettingsIcon} alt="" /></div></NavLink></li>
      </ul>
    </div>
  )
}
