import styled from 'styled-components';
import Button from '../../../Components/UI/Button/Button';
import Search from '../../../Components/Search/Search';
import FilterSelect from './CutomizeSelect/FilterSelect';
import TagIcon from '@mui/icons-material/LocalOfferOutlined';

import FilterAltIcon from '@mui/icons-material/FilterList';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import { useSelector } from 'react-redux';
import { selectClicks } from '../../../Redux/slices/clickSlice';


function ClassifiedHeader({className=""}) {

    const clicks=useSelector(selectClicks);

  return (
    <DIV className={`${className}`}>
         <div className="ClassifiedHeader-wrapper p-3">

             <div className="row justify-content-space-between classified-header-row">

                {/* Search  */}
                 <div className="search col-5 col-lg-5  search pe-0 ">

                     <div className="display-flex  ps-3 ">

                        <input type="text" className='input  search-input  flex-1  ' placeholder='What are you Looking For' />
                        <Button  className='   search--btn  text-color-white font-1-6 '>Search</Button>
                     </div>

                 </div>

                    {/* Category  */}
                 <div className="col-5  col-lg-3  classified-header-input  category cursor-p   ">
                     <div className=" filter-title filter-title-category display-flex   align-items-center  p-1  h-100  border-grey"> 
                         <TagIcon className='font-2-4 text-color-primary me-2' ></TagIcon>

                        <div className="fw-bold"> {clicks.classifiedPageSelectedCategory}</div>
                        
                     </div>
                 </div>

                {/* Location */}
                 <div className="col-6 pe-0  col-lg-4   classified-header-input cursor-p  location   ">
                     <div className=" filter-title filter-title-location  display-flex  align-items-center  p-1 h-100  border-grey  ">


                         <LocationIcon className='font-2-4 text-color-primary me-2'></LocationIcon>

                         <div className="fw-bold"> {clicks.classifiedPageSelectedLocation}</div>
                        
                     </div>
                 </div>




           

                    {/* Filter Icon */}
                 <div className="border-grey col-1 display-flex justify-content-center" id="Filter-icon">
                            <FilterAltIcon className=' filter-icon-svg font-2-7 text-color-primary'></FilterAltIcon>
                </div>


             </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .border-grey{

        @media(max-width:992px){     
                      border: 1px solid #0e0e0e26;
        }
    }
    
    .ClassifiedHeader-wrapper{

        .classified-header-row{
            flex-direction:row-reverse;  

            @media(max-width:992px){     
                flex-direction: initial;

            }
            .search{
                @media(max-width:992px){     
                        width: 100%; 
                        margin-bottom: 1rem!important;  
                }
                
            }
            
            .classified-header-input{
                @media(max-width:991px){     
                    /* border: 1px solid var(--color-grey-ori); */
                    /* width: 50%;  */
                }
                
            }
            
            .category{
                padding-right: 0;

                .filter-title{


                }

            }
            .location{
                padding-left: 0;

                .filter-title{
                    /* border:1px solid var(--color-grey); */
                }

            }
            
            
        }


       .search{
           div{
            border: 1px solid #0e0e0e45;
            border-radius: 5px 0px 0px 5px;


               .search-input{

               }
               
               .search--btn{
                   /* border:1px solid var(--color-black); */
                   /* padding: 0.7rem!important; */
                   background: var(--color-primary);  
               }
           }
        }

        #Filter-icon{

            @media(min-width:992px){     
                      display: none !important;
              }
        }
    }
`;

export default ClassifiedHeader;
