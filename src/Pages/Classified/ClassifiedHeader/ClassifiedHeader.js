import styled from 'styled-components';
import Button from '../../../Components/UI/Button/Button';
import Search from '../../../Components/Search/Search';
import FilterSelect from './CutomizeSelect/FilterSelect';


import CategoryIcon from '@mui/icons-material/Category';
import Location from '@mui/icons-material/FmdGood';
import { useSelector } from 'react-redux';
import { selectClicks } from '../../../Redux/slices/clickSlice';


function ClassifiedHeader({className=""}) {

    const clicks=useSelector(selectClicks);

  return (
    <DIV className={`${className}`}>
         <div className="ClassifiedHeader-wrapper p-3">

             <div className="row justify-content-space-between classified-header-row">

                 <div className="search col-5 search ">

                     <div className="display-flex  ps-3">

                        <input type="text" className='input  search-input w-80 ' placeholder='What are you Looking For' />
                        <Button text="Search " className='w-20 search--btn  text-color-white font-1-3'></Button>
                     </div>



                 </div>

                 <div className="col-3  classified-header-input  category cursor-p">
                     <div className=" filter-title filter-title-category display-flex   align-items-center  p-1"> 
                         <CategoryIcon className='font-2-4 text-color-primary me-2' ></CategoryIcon>

                        <div className="fw-bold"> {clicks.classifiedPageSelectedCategory}</div>
                        
                     </div>
                 </div>

                 <div className="col-4   classified-header-input cursor-p  location">
                     <div className=" filter-title filter-title-location  display-flex  align-items-center  p-1">


                         <Location className='font-2-4 text-color-primary me-2'></Location>

                         <div className="fw-bold"> {clicks.classifiedPageSelectedLocation}</div>
                        
                     </div>
                 </div>


                 {/* <div className="col-4   classified-header-input cursor-p  location background-red">
                    
                            <Search></Search>

                 </div> */}



             </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassifiedHeader */
    
    .ClassifiedHeader-wrapper{

        .classified-header-row{
            flex-direction:row-reverse;  

            @media(max-width:779px){     
                flex-direction: initial;

            }
            .search{
                @media(max-width:779px){     
                        width: 100%; 
                        margin-bottom: 1rem!important;  
                }
                
            }
            
            .classified-header-input{
                @media(max-width:779px){     
                    width: 50%; 
                }
                
            }
            
            .category{
                padding-right: 0;

                .filter-title{
                    border:1px solid var(--color-grey);
                }

            }
            .location{
                padding-left: 0;

                .filter-title{
                    border:1px solid var(--color-grey);
                }

            }
            
            
        }


       .search{
           div{
            border: 1px solid var(--color-grey);


               .search-input{

               }
               
               .search--btn{
                   /* border:1px solid var(--color-black); */
                   /* padding: 0.7rem!important; */
                   background: var(--color-primary);  
               }
           }
        }
    }
`;

export default ClassifiedHeader;
