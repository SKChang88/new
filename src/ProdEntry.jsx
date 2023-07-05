//This function caters for entry of product fields-------------------------------------------
export default function ProdEntry(props){
   
    return (
        <div>
        <fieldset>
            <label>{props.label} </label>
            <input
                type = "text"
                value={props.value}    
                onChange={function(e){ 
                    props.changeText(e.target.value);                   
                }}                                                     
            />
        </fieldset>
        </div>    
    )
}