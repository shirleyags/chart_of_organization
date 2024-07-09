import { IoMdCloseCircle } from 'react-icons/io'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

import './Card.css'

const Card = ({
  id,
  name,
  ocupation,
  image,
  cardBackgroundColor,
  whenDelete,
  favorite,
  selectAsFavorite
}) => {
  const chooseFavorite = () => {
    selectAsFavorite(id)
  }

  const favoriteProps = {
    size: 27,
    onClick: chooseFavorite
  }

  return (
    <div className="card">
      <IoMdCloseCircle
        size={25}
        className="delete"
        onClick={() => whenDelete(id)}
        aria-label="Deletar"
      />
      <div className="header" style={{ backgroundColor: cardBackgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{ocupation}</h5>
        <div className="favorite">
          {favorite ? (
            <FaHeart {...favoriteProps} color="#ff0000" />
          ) : (
            <FaRegHeart {...favoriteProps} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
