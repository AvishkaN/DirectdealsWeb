import { useEffect } from 'react';
import styled from 'styled-components';
import ProductItemComp from './ProductItemComp';



function ProductItem({className=""}) {

  useEffect(()=>{

    // scroll to top
    window.scroll(0, 0);

  },[]);

  return (
    <DIV className={`${className}`}>
         <div className="ProductItem-wrapper background-aqu  ">
                <ProductItemComp className='mt-5'></ProductItemComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;  
    margin-top: 7rem;  // only page


  
    
    .ProductItem-wrapper{
        width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default ProductItem;
