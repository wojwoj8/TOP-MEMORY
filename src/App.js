import CardContainer from './components/CardContainer';
import Cards from './components/Cards';
import Scoreboard from './components/Scorebar';
import './App.scss';
import { useState, useEffect } from "react";
import iconC from '../src/images/c-programming-language-seeklogo.com.svg';
import iconCpp from '../src/images/c-seeklogo.com.svg';
import iconCss from '../src/images/css3-seeklogo.com.svg';
import iconFortan from '../src/images/fortran-seeklogo.com.svg';
import iconGo from '../src/images/go-seeklogo.com.svg';
import iconJava from '../src/images/java-seeklogo.com.svg';
import iconJs from '../src/images/javascript-js-seeklogo.com.svg';
import iconKotlin from '../src/images/kotlin-seeklogo.com.svg';
import iconPhp from '../src/images/php-seeklogo.com.svg';
import iconPython from '../src/images/python-seeklogo.com.svg';
import iconReact from '../src/images/react-seeklogo.com.svg';
import iconRuby from '../src/images/ruby-seeklogo.com.svg';
import iconRust from '../src/images/rust-seeklogo.com.svg';
import iconScala from '../src/images/scala-seeklogo.com.svg';
import iconSwift from '../src/images/swift-seeklogo.com.svg';
import iconTs from '../src/images/typescript-seeklogo.com.svg';


function App() {

  let icons = [
    { icon: iconC, name: "C" },
    { icon: iconCpp, name: "C++" },
    { icon: iconCss, name: "CSS" },
    { icon: iconFortan, name: "Fortran" },
    { icon: iconGo, name: "Go" },
    { icon: iconJava, name: "Java" },
    { icon: iconJs, name: "JavaScript" },
    { icon: iconKotlin, name: "Kotlin" },
    { icon: iconPhp, name: "PHP" },
    { icon: iconPython, name: "Python" },
    { icon: iconReact, name: "React" },
    { icon: iconRuby, name: "Ruby" },
    { icon: iconRust, name: "Rust" },
    { icon: iconScala, name: "Scala" },
    { icon: iconSwift, name: "Swift" },
    { icon: iconTs, name: "TypeScript" },
  ];

  const [count, setCount] = useState(0);
  const [highscore, setHighscore] = useState(0);
  // add clicked cards to array and if clicked card is in array --> reset
  const [clicked, setClicked] = useState([]);


  const [cards, setCards] = useState(icons)

  const increase = () => {
    setCount(count + 1)
  };
  const zero = () => setCount(0);


  const add = (e) => {
    setClicked([...clicked, e])
  }
  
  const handleHighscore = (count) => {
    if (count >= highscore){
      setHighscore(count)
    }
  }

  const handleGame = (e) =>{
    console.log(e)
    console.log(clicked[0])
    if (clicked.includes(e)){
      console.log(`should set to 0`)
      zero();
      setClicked([]);
    }else{
      setClicked([...clicked, e])
      increase();
      handleHighscore(count);
    }
    shuffle(cards)
  }

  const shuffle = (cards) =>{
      for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
        }

  }
    useEffect(() => {
      handleHighscore(count)
      const newCards = [...cards];
      shuffle(icons);
      setCards(newCards)
      console.log('useEffect')
  },[count])



  return (
    <div className="App">
      <Scoreboard
      value={count}
      highscore={highscore}
      >

      </Scoreboard>
      <CardContainer
      add={add}
      increase={increase}
      count={count}
      handleGame={handleGame}
      cards={cards}
      >
      
      
      </CardContainer>
    </div>
  );
}

export default App;
