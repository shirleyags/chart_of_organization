import './Card.css'

const Card = ({ name, ocupation, image, cardBackgroundColor }) => {
  return (
    <div className="card">
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
