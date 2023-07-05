import ProdEntry from "./ProdEntry";


//Defining prodItem array  (input data)------------------------------------------------------------------------
const defaultProducts =[
    {
        prodCode:1,
        prodName: 'Purple Sweat Shirt',
        prodType: 'StreetWear',
        stock:20,
        image:'https://assets.teenvogue.com/photos/5dfa3d5c83b2af00089d3d89/4:3/w_5332,h_3999,c_limit/GettyImages-1167271974.jpg'
    },
    {
        prodCode:2,
        prodName: 'Black Sweat Shirt',
        prodType: 'StreetWear',
        stock:30,
        image:'https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/08/05085455/sg-streetwear-banner-680x1020.jpg'
    },    
    {
        prodCode:3,
        prodName: 'Blue Patterned',
        prodType: 'Casual',
        stock:0,
        image:'https://media.vogue.co.uk/photos/5d544e9fb89c2a00085bfce3/2:3/w_2560%2Cc_limit/original'
    },
    {
        prodCode:4,
        prodName: 'Black white striped',
        prodType: 'Athleisure',
        stock:50,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_Ct1gSHHca6-RIRMGbPtY9TiLT6OyfiIRw&usqp=CAU'
    },
    {
        prodCode:5,
        prodName: 'White Ensemble',
        prodType: 'Casual',
        stock:60,
        image:'https://imgmedia.lbb.in/media/2020/06/5ef30f69773d1e0fff2287e9_1592987497887.jpg'
    }
];
//-----------------------------------------------------------------------------------------------------------------

//This function handles all things related to products-------------------------------------------------------------
export default function ProductDetails(props){

    const [message, setMessage]=React.useState();                       //successful message
  
    const [prodItems, setProdItems]= React.useState(defaultProducts);   //product items
    const [prodCode,setProdCode] = React.useState('6');                 
    const [prodName,setProdName] = React.useState('Red Jacket');
    const [prodType,setProdType] = React.useState('Athleisure');
    const [stock,setStock]=React.useState(35);
    const [imageUrl,setImageUrl] = React.useState(
        'https://media.voguebusiness.com/photos/5fca6987e5c6de1c97bc880a/2:3/w_2560%2Cc_limit/VIRGIL-ON-GAMING-voguebus-Christian%2520Vierig_Getty%2520Images-20-story.jpg'

    )
    //These set the form entry items state (array)-------------------------------------------------------------------------------------
    function handleSetProdCode(prodCode){        
        setProdCode([prodCode]);
    }
    function handleSetProdName(prodName){
        setProdName([prodName]);
    }
    function handleSetProdType(prodType){
        setProdType([prodType]);
    }
    function handleSetStock(stock){
        setStock([stock]);
    }
    function handleSetImageUrl(imageUrl){
        setImageUrl([imageUrl]);
    }  


    return (
        <div>
            <h2>Product Details</h2>   
            <form
                onSubmit={function(e){
                    e.preventDefault();                    
                    
                    if (prodCode == '' || prodName == '' || prodType== ''){
                        setMessage('Please enter product code, name and type.');                        
                    }
                    else if (isNaN(stock)){
                            setMessage('Stock must be an integer.');                            
                    }   
                    else {
                        setProdItems([...prodItems, {prodCode:prodCode,prodName:prodName,prodType:prodType,stock:stock,image:imageUrl}]);
                        setMessage('Product is successfully updated!')                        
                    }                   
                    return false;
                }}>

                <h2>{message}</h2>  

                {/*Caters for entry of product fields---------------------------------------------------*/} 
                <ProdEntry label="Product Code: " value={prodCode} changeText={handleSetProdCode}  /> 
                <ProdEntry label ="Product Name: " value={prodName} changeText={handleSetProdName}/>  
                <ProdEntry label="Product Type: " value={prodType} changeText={handleSetProdType}/>              
                <ProdEntry label ="Product Stock: " value={stock} changeText={handleSetStock}/>  
                <ProdEntry label="Image Url: " value={imageUrl} changeText={handleSetImageUrl}/> 
                {/*---------------------------------------------------------------------------------------*/}
                
                <img src={imageUrl}/>
                <br></br>    
                <input type="submit" value="Update"></input>            
                
            </form>
        </div>        
    )
}