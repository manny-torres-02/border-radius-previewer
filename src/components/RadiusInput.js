// import UpdateButton from "./UpdateButton"



function RadiusInput(props) {
    function handleSubmit(e){
        e.preventDefault(); 
        console.log(document.getElementById("inputPX").value)
    }


    return (
        <div>
            <h1>this is the {props.name} component.</h1>
            <input type="text" placeholder="change border radius" id="inputPX"></input>
            <p id={props.name}> </p>
            <button onClick={handleSubmit} type="submit">{props.id}</button>
        </div>
    )
}

export default RadiusInput