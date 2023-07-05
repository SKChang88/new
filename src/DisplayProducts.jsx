import DisplayEach from "./DisplayEach";
import Options from "./Options";
import ButtonSelectDelete from "./ButtonSelectDelete";
//import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
//import React from "react";

//This function calls the filter by type function, select to delete function and displays all products----------

export default function DisplayProducts(props){   
    const [filter,setFilter]=React.useState('');            //filter based on product type 
    const [favourites,setFavourites]=React.useState([]);
   

   
    //This function sets the filter state ---------------------------------------------------------------------
    function handleSetFilter(state){       
        setFilter(state)
    }
    //---------------------------------------------------------------------------------------------------------
    
    //This function updates a specific indexed checkbox with input status-------------------------------------- 
    function handleChkBox(index,status,chkBox){    
         
        let tempArray = chkBox;    
        tempArray[index] = status;      
        props.changeChkBox([...tempArray]);  
    }  
    //---------------------------------------------------------------------------------------------------------
    
   function handleFavourite(favourites){
        setFavourites(favourites);     
    }

    return(   
        
        <div>             
            <label>Filter: </label>
            <Options changeFilter = {handleSetFilter}/>
            <br></br> <br></br>

            {/*Button to delete all checked items-------------------------------------------------------------- */}
            <ButtonSelectDelete chkBox={props.chkBox} prodItems={props.prodItems}
                                changeChkBox = {handleChkBox}
                                changeProdItemState ={props.changeProdItemState}/>                   
            
            {/*Display all products----------------------------------------------------------------------------- */}
            
            
            <div id="items">               
                {props.prodItems                   
                .map(function(item,index){        
                    
                    //Filters options not selected---------------------------------------------------------------
                    const filterOn = (filter && item.prodType !== filter) ? true: false;
                    if (filterOn) return null;                        
                    
                    //Hides items with 0 stock
                    const hide = (props.isHidden && item.stock ==0) ? true:false;
                    if (hide) return null; 
                   
                    //defines and handles Select To Delete Checkboxes (chkBox array)------------------- 
                    return (
                       /* <div key={item.prodCode}> commented out to facilitate demo*/ 
                        <div>       
                            <br></br>                
                            <input type="checkbox" checked={props.chkBox[index]}   
                            onChange={(e) => { 
                                handleChkBox(index,e.target.checked,props.chkBox );  
                            }}
                            />Select to delete
                            
                            {/*Displays each product item --------------------------------------------------*/}
                           
                            <DisplayEach  
                                changeProdItemState={props.changeProdItemState}                        
                                index={index} 
                                prodItems={props.prodItems}                                                     
                                item={item} 
                                favourites={favourites}
                                changeFavourite={handleFavourite}
                            />
                            
                        </div>
                           
                    )                  
                })}
                
            </div>
            {/*Display favourite list*/}
            <div>
                <h1>Favourite List</h1>
                <div id='favourites'>
                {favourites.map(function(favourite,index){
                    return(
                        <div>
                            
                            <img src={favourite.image}/>
                            <p>{favourite.prodCode}</p>
                            <p>{favourite.prodName}</p>
                            <p>{favourite.prodType}</p>
                            <p>{favourite.stock}</p>   
                        </div>
                    )

                })
                }
                </div>
            </div>  
        </div>
       
        
    )
}

