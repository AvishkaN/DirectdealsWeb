import styled from 'styled-components';
import MobilePhoto1 from './../../../assets/img/productImages/fitted (1).jpg';
import MobilePhoto2 from './../../../assets/img/productImages/fitted.jpg';
import Link from '../../../Components/UI/Link/Link';
import Product from './Product';

import { AllAds } from '../../../Data/Data';








function ProductColumn({className="",}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductColumn-wrapper row gx-5 gx-sm-0">

        {
        AllAds.map(Ad=>(
            <div className=" col-sm-11 col-6 mb-4   overfloy-y-hidden">

                        <Link to="/single-product">
                                <Product className='product-item   cursor-p  h-100    me-sm-2 ms-sm-2    ' Ad={Ad}></Product>
                        </Link>
            </div>
            ))
        }
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProductColumn */
    
    .ProductColumn-wrapper{
        /* background-color: red; */

        @media(max-width:576px){     
            /* justify-content: center; */
        }



        .product-item{
            border-top: 0.5px solid #d4ded9;
            border-bottom: 0.5px solid #d4ded9;

          

            box-shadow: 0 0 8px 0 #d4ded9;
           border-radius: 4px;
            &:hover{
            }

            @media(max-width:1085px){
                width: 100% !important;
            }
        }

    }
`;

export default ProductColumn;
