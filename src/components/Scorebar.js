const Scoreboard = ({value, highscore}) =>{


    return(
        <div className="scoreboard-content">
            <div className="scoreboard-in">

            
                <div className="scoreboard-title">
                    <h2>
                        Programming Technologies Memory game
                    </h2>
                </div>
                <div className="scoreboard">
                    <p className="score">Score: {value} </p>
                    <p className="high-score">High Score: {highscore} </p>
                </div>
            </div>
        </div>
    )

}

export default Scoreboard;