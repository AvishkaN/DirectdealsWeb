import { useEffect } from 'react';
import styled from 'styled-components';
import UndoPage from '../../Components/UI/UndoPage/UndoPage';
import ProductItemComp from './ProductItemComp';



function ProductItem({className=""}) {

  useEffect(()=>{

    // scroll to top
    window.scroll(0, 0);

  },[]);

  return (
    <DIV className={`${className}`}>
         <div className="ProductItem-wrapper background-aqu  ">

            <UndoPage title={""}  to="/" className="mt-3">
                    <ProductItemComp className=''></ProductItemComp>
            </UndoPage>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;  
    margin-top: 7rem;  // only page


  
    
    .ProductItem-wrapper{
      --product-itmem-page-width:80%;
      
      
      @media(max-width:1134px){     
        --product-itmem-page-width:97%;
        }

        width: var(--product-itmem-page-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default ProductItem;
