import CardContainer from './CardContainer';


const Cards = ({name, icon}) => {

  
    return (
      <div className='card'>
          <div className='card-content'>
            <img src={icon} alt={name} />
            <p>{name}</p>
          </div>
      </div>
    );
  };

export default Cards;