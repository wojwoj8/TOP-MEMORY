import Cards from "./Cards";


const CardContainer = ({increase, highscore, add, handleGame, cards}) =>{

    return(
        
        <div className="cards">
            {cards.map((icon) =>(
                <Cards
                increase={increase}
                highscore={highscore}
                key={icon.name}
                name={icon.name}
                icon={icon.icon}
                add={add}
                handleGame={handleGame}
                >
                </Cards>
            ))}
            
        </div>
    )

}

export default CardContainer;