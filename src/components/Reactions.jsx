import React, { useEffect, useState } from 'react'
import '../styles/Reactions.css'

const Reactions = ({reactions}) => {

  const totalReactions = Object.values(reactions).reduce((acc, curr) => acc + curr, 0)
  const [reactionsCount, setReactionsCount] = useState(totalReactions)

  useEffect(() => {
    setReactionsCount(totalReactions)
  }, [totalReactions])
  
  return (
    <div className='reactions'>
      <div className="reactions-icons">
        <figure>
          <img src="https://cdn.iconscout.com/icon/free/png-64/like-2387659-1991059.png" alt="like" />
        </figure>
        <figure>
          <img src="https://cdn.iconscout.com/icon/free/png-64/love-2387666-1991064.png" alt="love" />
        </figure>
        <figure>
          <img src="https://cdn.iconscout.com/icon/free/png-64/care-2387662-1991058.png" alt="care" />
        </figure>
      </div>
      <p>{reactionsCount}</p>
    </div>
  )
}

export default Reactions