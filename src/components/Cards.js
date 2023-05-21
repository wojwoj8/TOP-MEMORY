const Cards = ({name, icon, handleGame}) => {

  
    return (
      <div className='card'>
          <div className='card-content'
          onClick={(e) => handleGame(name)}>
            <img src={icon} alt={name} />
            <p>{name}</p>
          </div>
      </div>
    );
  };

export default Cards;