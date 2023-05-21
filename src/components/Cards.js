const Cards = ({name, icon, increase}) => {

  
    return (
      <div className='card'>
          <div className='card-content'
          onClick={increase}>
            <img src={icon} alt={name} />
            <p>{name}</p>
          </div>
      </div>
    );
  };

export default Cards;