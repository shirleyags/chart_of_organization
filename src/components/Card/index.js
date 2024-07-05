import { IoMdCloseCircle } from 'react-icons/io'
import './Card.css'

const Card = ({
  id,
  name,
  ocupation,
  image,
  cardBackgroundColor,
  whenDelete
}) => {
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
      </div>
    </div>
  )
}

export default Card
