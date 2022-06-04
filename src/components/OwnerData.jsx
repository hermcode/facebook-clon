import React from 'react'
import { BiWorld } from 'react-icons/bi';
import '../styles/OwnerData.css'

const OwnerData = () => {
  return (
    <div className='user-info'>
      <figure>
        <img src="https://scontent.fntr5-1.fna.fbcdn.net/v/t1.6435-9/61884291_487299918477849_6430058434342682624_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2GcZu9aZi5EAX9xRVKC&_nc_ht=scontent.fntr5-1.fna&oh=00_AT8eR6bYi8lge8O-i7jQ-PHBm1Q522EbvFgam7OFOsPnkA&oe=62BEB506" alt="" />
      </figure>
      <div className='username'>
        <p>Velocidad al Límite</p>
        <span>2 h • <BiWorld /> </span>
      </div>
    </div>
  )
}

export default OwnerData