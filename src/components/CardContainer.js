import Cards from "./Cards";
import iconC from '../images/c-programming-language-seeklogo.com.svg';
import iconCpp from '../images/c-seeklogo.com.svg';
import iconCss from '../images/css3-seeklogo.com.svg';
import iconFortan from '../images/fortran-seeklogo.com.svg';
import iconGo from '../images/go-seeklogo.com.svg';
import iconJava from '../images/java-seeklogo.com.svg';
import iconJs from '../images/javascript-js-seeklogo.com.svg';
import iconKotlin from '../images/kotlin-seeklogo.com.svg';
import iconPhp from '../images/php-seeklogo.com.svg';
import iconPython from '../images/python-seeklogo.com.svg';
import iconReact from '../images/react-seeklogo.com.svg';
import iconRuby from '../images/ruby-seeklogo.com.svg';
import iconRust from '../images/rust-seeklogo.com.svg';
import iconScala from '../images/scala-seeklogo.com.svg';
import iconSwift from '../images/swift-seeklogo.com.svg';
import iconTs from '../images/typescript-seeklogo.com.svg';

const CardContainer = ({increase, highscore}) =>{

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

    return(
        
        <div className="cards">
            {icons.map((icon) =>(
                <Cards
                increase={increase}
                highscore={highscore}
                key={icon.name}
                name={icon.name}
                icon={icon.icon}
                
                >
                </Cards>
            ))}
            
        </div>
    )

}

export default CardContainer;