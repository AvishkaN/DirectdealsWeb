import styled from 'styled-components';
import ProductDetailItem from './ProductDetailItem';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';



function Product({className="",product}) {
  return (
    <DIV className={`${className}`}>
                <div className="Product-wrapper display-flex pt-4 pb-4">
                    <div className="   product-image">
                        <img className=' ' src={product.image} alt="" />
                    </div>
                    <div className="   mt-sm-0 mt-2   flex-1 ms-3 ">

                        {/* Product  Name */}
                        <div className="title font-1-6 fw-bold">{product.productName}</div>
 
                        {/* Small details */}
                        <div className="display-flex Small-details-section">
                            <div className="">
                                    <ProductDetailItem  svgIcon={product.list.date.icon} text={product.list.date.text}  ></ProductDetailItem>

                            </div>
                            <div className="ms-sm-3">

                                    <ProductDetailItem  svgIcon={product.list.location.icon} text={product.list.location.text}  ></ProductDetailItem>
                            </div>
                            <div className="ms-sm-3">

                                    <ProductDetailItem  svgIcon={product.list.category.icon} text={product.list.category.text}  ></ProductDetailItem>
                            </div>
                        </div>


                        {/* Near by location */}
                        <div className="   fw-bold    text-color-grey-ori  font-1-3  me-4 nearby-text">
                            <LocationIcon></LocationIcon>
                            {product.nearBy}
                        </div>


                        {/* Price */}
                        <div className=" font-1-6   mt-2  text-color-primary fw-bold ">
                            {product.Price}
                        </div>


                        {/* <div className="price text-color-primary fw-bold font-1-5">{price}</div> */}
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
            /* height: 13rem !important;
            width: 14rem !important; */

            /* height: 102px;
            width: 136px; */

            height: 12rem;
            width: 14rem;

    
        }
    }
    
    .Small-details-section{  
        @media(max-width:576px){     
            flex-direction: column;  
        }
    }


    .Product-wrapper{
      /* width: var(--Product-content-width);
        margin-left: auto;
        margin-right: auto;  */
        @media(max-width:576px){     
            flex-direction: column;  
        }

        .product-list-mt{  
            margin-top: -0.27rem; 
            /* color: grey;        */
            /* color: #4c4141;        */
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
