import React from 'react'
import Profile from './sample';

export const Footer = () => {
  const year=new Date();
  return (
    <footer>
        <Profile />
        <br/>copyright&copy;{year.getFullYear()} 
    </footer>
  )
}
