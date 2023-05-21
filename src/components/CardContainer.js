import Cards from "./Cards";

const CardContainer = () =>{

    return(
        <div >
            <Cards onClick={console.log('test')}>

            </Cards>
        </div>
    )

}

export default CardContainer;