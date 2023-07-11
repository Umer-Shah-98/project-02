import React from 'react'
import HomeIcon from '../assets/home-icon.png'
import ExpensesIcon from '../assets/expenses-icon.png'
import WalletIcon from '../assets/wallet-icon.png'
import SettingsIcon from '../assets/settings-icon.png'
import './navbar.css'

export default function NavBar({color}) {
  return (
    <div className='flex justify-center items-center navbar m-3 rounded-l-lg {color}'>
      <ul className='flex justify-center items-center flex-col'>
        <li className='m-5 home-icon'><a href=""><img src={HomeIcon} alt="" /></a></li>
        <li className='m-5 wallet-icon icon-size'><a href=""><img src={WalletIcon} alt="" /></a></li>
        <li className='m-5 expenses-icon icon-size'><a href=""><img src={ExpensesIcon} alt="" /></a></li>
        <li className='m-5 settings-icon icon-size'><a href=""><img src={SettingsIcon} alt="" /></a></li>
      </ul>
    </div>
  )
}
