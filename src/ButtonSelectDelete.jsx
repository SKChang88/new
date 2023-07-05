//This function provides a button for the deletion of all checked items----------------------------------- 
export default function ButtonSelectDelete(props){
    return(
        <button 
                onClick={function(){                     
                   let tempProdArray = props.prodItems;
                                 
                   
                   //A temp prodItem array is used to hold the prodItems while they are deleted based on the corresponding
                   //checked boxes. Each time a deletion takes place, the corresponding checked box will be updated to 
                   //false. Finally, the actual prodItem array is then set to a copy of the updated temp array.
                   //As the length of the temp array changes each time an item is being deleted, a deleteCounter variable 
                   //is maintained to adjust the index i so that the right item is being deleted each time

                    var deleteCounter = 0;
                    for (var i=0;i<=props.chkBox.length;i++) {       
                        
                        if (props.chkBox[i]){                
                            tempProdArray.splice(i-deleteCounter,1);
                            deleteCounter = deleteCounter + 1;                                
                            props.changeChkBox(i,false,props.chkBox);                    
                        } 
                    props.changeProdItemState([...tempProdArray]);
                    
                    }
                }}
              >
              Delete selected    
            </button>        
    )
}