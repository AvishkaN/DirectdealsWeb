import styled from 'styled-components';

import StarIcon from '@mui/icons-material/StarOutlined';

import ProductDetailItem from './ProductDetailItem';
import TopSellerIcon from './../../../assets/icons/topSeller/topSeller.png';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';



function Product({className="",Ad}) {
  return (
    <DIV className={`${className}`} featureAd={Ad.featureAd}>
                <div className="Product-wrapper display-flex pt-sm-4 pb-sm-4">
                    <div className="   product-image">
                        <img className=' ' src={Ad.image} alt="" />
                    </div>
                    <div className="   mt-sm-0 mt-2   flex-1 ms-3 ">

                        {/* Product  Name */}
                        <div className="title font-1-6 fw-bold">{Ad.productName}</div>
 
                        {/* Small details */}
                        <div className="display-flex Small-details-section">
                            <div className="">
                                    <ProductDetailItem  svgIcon={Ad.list.date.icon} text={Ad.list.date.text}  ></ProductDetailItem>

                            </div>
                            <div className="ms-sm-3">

                                    <ProductDetailItem  svgIcon={Ad.list.location.icon} text={Ad.list.location.text}  ></ProductDetailItem>
                            </div>
                            <div className="ms-sm-3">

                                    <ProductDetailItem  svgIcon={Ad.list.category.icon} text={Ad.list.category.text}  ></ProductDetailItem>
                            </div>
                        </div>


                        {/* Near by location */}
                        <div className="   fw-bold    text-color-grey-ori  font-1-3  me-4 nearby-text">
                            <LocationIcon></LocationIcon>
                            {Ad.nearBy}
                        </div>


                        

                    {/* Feature ad */}
                     { Ad.featureAd&& (
                         
                    <div className="feature-ad-section">

                        {/* Price */}
                        <div className="font-1-6    text-color-primary fw-bold ">
                            {Ad.Price}
                        </div>

                        {/* Other Images */}

                        <div className="other-images-section">

                                {
                                    Ad.otherImages.map(image=>(
                                        <img src={image} alt=""  className='other-images  ms-2' />
                                    ))
                                }
                        </div>


                        <div className="FetureAdText  text-color-white fw-bold ps-2 pe-5  ">
                                Feature Ad
                        </div>



                    </div>
                    )}

                   
                 

                    {
                        Ad.topSeller && (

                        <div className='top-ad-section'>
                                {/* Price */}
                                <div className="font-1-6    text-color-primary fw-bold ">
                                    {Ad.Price}
                                </div>

                                        

                                <div className="top-seller-section ">
                                    <img src={TopSellerIcon} alt="" className='w-75 ' />
                                </div>

                                <div className="top-ad-text   display-inline-block border-radius-5 pe-1 ">
                                      <div className="pe-2 ps-2 border-radius-5  text-color-white display-flex align-items-center">

                                                <StarIcon className='font-2'></StarIcon>
                                                <div className="">
                                                        Top Ad
                                                </div>

                                      </div>
                                      
                                </div>

                        </div>

                        )
                    }



                    {/* Price  normal Ad*/}
                    {
                      (  !Ad.topSeller   ||  !Ad.topSeller) && (


                                <div className="font-1-6    text-color-primary fw-bold ">
                                    {Ad.Price}
                                </div>


                        )
                    }


                    </div>
                </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Product */
    background:${props => props.featureAd? '#fffbc1':''};



    .product-image{

        @media(max-width:767px){     
            margin-bottom: 1rem;

        }

        @media(max-width:800px){     
            display: flex;
            justify-content: space-evenly;

        }
        img{
            height: 12rem;
            width: 14rem;

            @media(max-width:576px){        
                     width:100%;
            }

    
        }
    }
    
    .Small-details-section{  
        @media(max-width:576px){     
            flex-direction: column;  
        }
    }


    .feature-ad-section{
        
        .other-images-section{
            
            /* background-color: red;  */

            @media(max-width:576px){     
                            display: none;
                }


            .other-images{
                width: 55px;
                 height: 50px;
            }
        }

    }


    .top-seller-section{

    }



    .Product-wrapper{
      /* width: var(--Product-content-width);
        margin-left: auto;
        margin-right: auto;  */
        position: relative;
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

    .FetureAdText{
        /* background-color: var(--color-primary); */
        background-color: #fea502;
        clip-path: polygon(18% 0px, 21% 0px, 81.42% 0px, 100% 100%, 70% 100%, 0px 98%, 0px 0px, 7% 0px);
        position: absolute;
        top: 0;
        left:0; 
    }

    .top-seller-section{
        position: absolute;
        top: 0;
        left: 0; 
        transform:translateX(-4%) rotate(0deg) translateY(-1%);

        img{
            margin-top: -0.3rem;

        }

        /* background: red; */
    }

    .top-ad-section{
        /* background-color: red;  */
        .top-ad-text{
            /* display: inline; */
            background-color: #fea502;
        }
    }
`;

export default Product;
