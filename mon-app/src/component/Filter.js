import { ToggleButton } from "react-bootstrap"

function Filter(props){

    return(
        <>
        <div  className="Filter text-center">
            <ToggleButton onClick={() => {props.changeFilter("")}} className="myButton">Cancel</ToggleButton>
            <ToggleButton onClick={() => {props.changeFilter("Goodies")}} className="myButton">Goodies</ToggleButton>
            <ToggleButton onClick={() => {props.changeFilter("Figure")}} className="myButton">Figure</ToggleButton>
            <ToggleButton onClick={() => {props.changeFilter("Cosplay")}} className="myButton">Cosplay</ToggleButton>
            <ToggleButton onClick={() => {props.changeFilter("Poster")}} className="myButton">Poster</ToggleButton>
            <ToggleButton onClick={() => {props.changeFilter("Wear")}} className="myButton">Wear</ToggleButton>
        </div>
        </>
    )   
}
export default Filter;