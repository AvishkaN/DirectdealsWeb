import styled from 'styled-components';


import googleAdBanner from './../../assets/img/googleAdBanner.png';
import FirstBanner from './../../assets/img/firstBanner.png';

import FilterColumn from './FIlterColumn/FilterColumn';
import ProductColumn from './ProductCol/ProductColumn';
import ClassifiedHeader from './ClassifiedHeader/ClassifiedHeader';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShowCategoryPopupFN, ShowLocationPopupFN } from '../../Redux/slices/clickSlice';
import Search from '../../Components/Search/Search';



function ClassfiedPageComp({className=""}) {



    const[showFilter,setShowFilter]=useState(true);
    const dispatch=useDispatch();


    const handleClick=(e)=>{

        const FilterICon=e.target.closest('.filter-icon-svg');

       const FilterTitle=e.target.closest('.filter-title')?.classList[1]; 


        if(FilterICon){
            setShowFilter(!showFilter);
        }


        if(FilterTitle=="filter-title-location"){
            console.log(`....`);
            dispatch(ShowLocationPopupFN());
            
            
        }
        if(FilterTitle=="filter-title-category"){
            dispatch(ShowCategoryPopupFN());

        }
    }

    useEffect(()=>{
        

        const documentWidth=document.documentElement.clientWidth;

        if(documentWidth<992){ 
            setShowFilter(false);

        }

    },[]);



  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="ClassfiedPageComp-wrapper">

             <div className="first-banner dispaly-none-992">
                 <img src={FirstBanner} alt="" className='w-100' />
             </div>





             <div className="Classified-header">
                     <ClassifiedHeader></ClassifiedHeader>
             </div>


                    {/* filter  */}
             <div className="filter-icon ps-5 cursor-p">
                 <div className="row">
                        <div className="col p-3">
                           {  showFilter  && <FilterAltIcon className=' filter-icon-svg font-2-7 text-color-primary'></FilterAltIcon>}
                            {!showFilter && <FilterAltOffIcon className=' filter-icon-svg font-2-7 text-color-primary'></FilterAltOffIcon>}

                        </div>
                 </div>
             </div>

               <div className="row pe-4 ps-4  mt-3 ">
                  {showFilter &&(
                       <div className="filtercol col-lg-3 p-3">
                            <FilterColumn></FilterColumn>
                            </div>
                    )}


                        {/* Product Column */}
                   <div className="col-lg-8 product-col">
                          <ProductColumn></ProductColumn>
                   </div>

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
               border: 1px solid var(--color-grey);

            @media (max-width: 992px){
                /* display: none;   */
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
