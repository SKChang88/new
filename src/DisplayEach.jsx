//import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
//import ProductDetail from "./ProductDetailTemp";
//import {Router, Link} from 'react-router-dom';

//This function displays each product, providing a bin to cater for deletion of individual product-----------


export default function DisplayEach(props){   
    
    return (
        
        <div >     
            
            {/*<Link to="./ProductDetailTemp"><img src={props.item.image}/> </Link>        
            <Route exact path="./ProductDetailTemp" component={ProductDetail} />  */}    
           <img src={props.item.image}/>
            <p onClick={function(){
                var favouriteTemp = {};
                favouriteTemp.prodCode = props.item.prodCode;
                favouriteTemp.prodName = props.item.prodName;
                favouriteTemp.prodType = props.item.prodType;
                favouriteTemp.stock = props.item.stock;
                favouriteTemp.image = props.item.image;
                props.changeFavourite([...props.favourites, favouriteTemp]);
                
            }}>
              🏃  
            </p>
            <p>{props.item.prodCode}</p>
            <p>{props.item.prodName}</p>
            <p>{props.item.prodType}</p>
            <p>{props.item.stock}</p>   
            <p
                onClick={function(){                    
                    props.prodItems.splice(props.index,1);
                    props.changeProdItemState(props.prodItems);

                }}
            >
                🗑️   
            </p> 
                    
        </div>
         
    )
}
