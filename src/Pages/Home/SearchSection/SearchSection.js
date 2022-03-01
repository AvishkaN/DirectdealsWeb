import styled from 'styled-components';
import Input from '../../../Components/UI/Input/Input';
import Button from '../../../Components/UI/Button/Button';
import SearchBar from './SearchBar';



function SearchSection({className=""}) {
  return (
    <DIV className={`${className} p-4 display-flex  `}>
        

        <div className="search text-center w-100   display-flex  flex-direction-column  justify-content-center       ">

            <div className="location display-flex align-items-center  justify-content-center text-color-white ">
                  
                  {/* Button 1 */}
                  <Button className="location-show-btn show-btn-location show-btn p-2 border-radius-20 display-flex align-item-center  ps-4 pe-4 cursor-p     justify-content-center text-color-white">
                                <i className="fas fa-map-marker-alt font-2" />
                                <div className="ms-2"> All of srilanka</div>  
                  </Button>



                  {/* Button 2 */}
                  <Button className="neraBy-show-btn  show-btn  p-2 border-radius-15 display-flex align-item-center ps-4 pe-4 cursor-p    justify-content-center text-color-white">
                            <i className="fas fa-location-arrow font-2" />
                            <div className="ms-2">Near By Location</div>
                  </Button>
            
            </div>

            

            {/* Search Bar */}
            <SearchBar></SearchBar>

      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* min-height: 50vh;
    min-height: 35vh; */
    min-height: 40vh;

    

  .location{
    /* background-color: red;  */

      @media(max-width:392px){     
                      flex-direction: column;
        }


    .show-btn{
      background: #29adad70; 

      @media(max-width:392px){     
                     width: 65%;
        }
      
      
    }
    .neraBy-show-btn{
      /* background-color: red;  */
      margin-left: 1rem; 
      @media(max-width:392px){     
                      margin-left: 0rem; 
                      margin-top: 1rem; 
        }
      }
    }


   
`;

export default SearchSection;
