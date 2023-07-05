//This function caters for the filter by type facility-----------------------------
export default function Options(props){
    return (
        <div>
            <select
                onChange={function(e){                                       
                    props.changeFilter(e.target.value);                    
                }}
                >               
                <option value="">---</option>
                <option value="Athleisure">Athleisure</option>
                <option value="Casual">Casual</option>
                <option value="StreetWear">StreetWear</option>
            </select>
        </div>        
    )
}