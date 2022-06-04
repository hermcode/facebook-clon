import React from 'react'
import { BiWorld } from 'react-icons/bi';
import '../styles/OwnerData.css'

const OwnerData = ({ username, pp, date }) => {
  return (
    <div className='user-info'>
      <figure>
        <img src={pp} alt="" />
      </figure>
      <div className='username'>
        <p>{username}</p>
        <span>{date} • <BiWorld /> </span>
      </div>
    </div>
  )
}

export default OwnerData