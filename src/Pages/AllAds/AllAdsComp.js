import styled from 'styled-components';


import googleAdBanner from './../../assets/img/googleAdBanner.png';
import FirstBanner from './../../assets/img/firstBanner.png';

import FilterColumn from './FIlterColumn/FilterColumn';
import ProductColumn from './ProductCol/ProductColumn';
import ClassifiedHeader from './ClassifiedHeader/ClassifiedHeader';
import CTAShopNowRow from './CTAShopNow/CTAShopNowRow';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShowCategoryPopupFN, ShowClassifiedPageFilter, ShowLocationPopupFN } from '../../Redux/slices/clickSlice';



function ClassfiedPageComp({className=""}) {



    const dispatch=useDispatch();


    const handleClick=(e)=>{

        const FilterICon=e.target.closest('#Filter-icon');

       const FilterTitle=e.target.closest('.filter-title')?.classList[1]; 


        if(FilterICon){
            dispatch(ShowClassifiedPageFilter());
        }


        if(FilterTitle=="filter-title-location"){
            dispatch(ShowLocationPopupFN());
            
            
        }
        if(FilterTitle=="filter-title-category"){
            dispatch(ShowCategoryPopupFN());

        }

    }





  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="ClassfiedPageComp-wrapper">


                {/* Banner */}
             <div className="first-banner dispaly-none-992">
                 <img src={FirstBanner} alt="" className='w-100' />
             </div>

                {/* Location , category , search bar contianer */}
             <div className="Classified-header  mt-2">
                     <ClassifiedHeader></ClassifiedHeader>
             </div>

                {/* CTA section --> Shop Now */}
                <CTAShopNowRow ></CTAShopNowRow>

              

               <div className="row pe-4 ps-4  mt-3 ">


                    {/* Filter  Column*/}
                       <div className="filtercol col-lg-3 p-3">
                            <FilterColumn></FilterColumn>
                        </div>


                    {/* Product Column */}
                   <div className="col-lg-8 product-col">
                          <ProductColumn></ProductColumn>
                   </div>


                {/* Google Ad */}
                   <div className="col-lg-1  gogole-ad p-0 dispaly-none-992">
                       <img src={googleAdBanner} className="w-100" alt="" />
                   </div>
                   
               </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassfiedPageComp */
    
    .ClassfiedPageComp-wrapper{
      /* width: var(--ClassfiedPageComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .filtercol{
               border: 1px solid #e7edee;

            @media (max-width: 992px){
                display: none;  
            }

        }

        .filter-icon{
            @media (min-width: 992px){
                display: none;  
            }
        }

        @media (min-width: 1085px){
            .col-lg-3 {
                flex: 0 0 auto;
                width: 25%;
            }
        }

        @media (min-width: 1085px){
            .col-lg-9 {
                flex: 0 0 auto;
                width: 75%;
            }
        }

        .product-col{

            @media(min-width:992px){
                width: 64.666667%;

            }
        }

        .gogole-ad{
            /* background: red;  */
            width: 10.333333%;
        }


    }

    .dispaly-none-992{

        @media(max-width:992px){     
                      display: none; 
        }
    }
`;

export default ClassfiedPageComp;
