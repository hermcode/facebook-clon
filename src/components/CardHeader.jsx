import React from 'react'
import OwnerData from './OwnerData';


import '../styles/CardHeader.css'
import Options from './Options';

const CardHeader = () => {
  return (
    <div className='card-header'>
      <OwnerData />
      <Options />
    </div>
  )
}

export default CardHeader