import CardContainer from './components/CardContainer';
import Cards from './components/Cards';
import Scoreboard from './components/Scorebar';
import './App.scss';
import { useState, useEffect } from "react";



function App() {

  const [count, setCount] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const increase = () => {
    setCount(count + 1)
  };
  const zero = () => setCount(0);

  
  useEffect(() =>{
    if (count >= highscore){
      
      setHighscore(count)
      console.log(`highScore: ${highscore}, score: ${count}`)
    }
  
  }, [count, highscore])
    

  return (
    <div className="App">
      <Scoreboard
      value={count}
      highscore={highscore}
      >

      </Scoreboard>
      <CardContainer
      increase={increase}>
      
      </CardContainer>
    </div>
  );
}

export default App;
