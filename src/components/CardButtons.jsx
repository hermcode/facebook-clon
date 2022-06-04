import { BiLike } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

import '../styles/CardButtons.css'

const CardButtons = ({handleShowComments}) => {
  return (
    <div className="card-buttons">
      <div className='button'>
        <figure>
          <BiLike />
        </figure>
        <span>Me gusta</span>
      </div>
      <div className='button' onClick={handleShowComments}>
        <figure>
          <FaRegCommentAlt />
        </figure>
        <span>Comentar</span>
      </div>
      <div className='button'>
        <figure>
          <RiShareForwardLine />
        </figure>
        <span>Compartir</span>
      </div>
    </div>
  )
}

export default CardButtons