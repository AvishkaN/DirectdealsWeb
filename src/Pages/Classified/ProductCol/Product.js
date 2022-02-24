import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';



function Product({className="",product}) {
  return (
    <DIV className={`${className}`}>
         <div className="Product-wrapper">
                <div className="row">
                    <div className="col-md-3 col-12 product-image">
                        <img className='w-100' src={product.image} alt="" />
                    </div>
                    <div className="col-md-9 col-12 mt-sm-0 mt-2  ">
                        <div className="title font-1-6 fw-bold">{product.productName}</div>
 

                        <div className="font-1-4 product-list-mt text-color-grey-ori ">{product.AdType}</div>
                        <div className="font-1-4  product-list-mt text-color-grey-ori ">{product.location}</div>
                        <div className="font-1-6  product-list-mt  text-color-primary fw-bold ">{product.Price}</div>
                        <div className="mt-1  font-1-6 fw-bold  text-color-grey-ori  text-right me-4 nearby-text">{ product.nearBy}</div>



                        {/* <div className="price text-color-primary fw-bold font-1-5">{price}</div> */}
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Product */

    .product-image{

        @media(max-width:767px){     
            margin-bottom: 1rem;

        }

        @media(max-width:800px){     
            display: flex;
            justify-content: space-evenly;

        }
        img{
            height: 14rem !important;
            width: 20rem !important;
            /* width: 85% !important;   */

    
        }
    }
    
    .Product-wrapper{
      /* width: var(--Product-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .product-list-mt{  
            margin-top: -0.27rem; 
            /* color: grey;        */
            /* color: #4c4141;        */
        }


        .row{
            /* @media (min-width: 992px){
                flex-direction: column;  
            } */
        }

        .title{
            @media (max-width: 767px){
                    font-size:1.4rem;
            }
            @media (max-width: 396px){
                    font-size:1.3rem;
            }
        }
        .nearby-text{
            @media (max-width: 400px){
                    font-size:1.2rem;
            }
        }

        .location{
            color: #afb7ad;     
        }

        .member{
            background: #afb7ad;  

            @media (max-width: 615px){
                    /* font-size:1.1rem;    */
                    width: 20% !important;     
            }
            @media (max-width: 450px){
                    /* font-size:1.1rem;    */
                    width: 25% !important;     
            }
            @media (max-width: 377px){
                    /* font-size:1.1rem;    */
                    width: 30% !important;     
            }
        }

        .verfied-Seller{
                color: #0074ba;   

                .verfiy-icon{

                }
        }

    }
`;

export default Product;
