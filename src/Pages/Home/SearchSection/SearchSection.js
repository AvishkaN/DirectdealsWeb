import styled from 'styled-components';
import Input from '../../../Components/UI/Input/Input';
import Button from '../../../Components/UI/Button/Button';



function SearchSection({className=""}) {
  return (
    <DIV className={`${className} p-4 `}>
        

        <div className="search text-center pb-5 ">

            <div className="location display-flex align-items-center  justify-content-center text-color-white mt-6">
                  
                  <Button className="location-show-btn show-btn p-2 border-radius-20 display-flex align-item-center  ps-4 pe-4 cursor-p   justify-content-center text-color-white">
                                <i className="fas fa-map-marker-alt font-2" />
                                <div className="ms-2"> All of srilanka</div>  
                  </Button>


                  <Button className="neraBy-show-btn show-btn p-2 border-radius-15 display-flex align-item-center ms-3 ps-4 pe-4 cursor-p  justify-content-center text-color-white">
                            <i className="fas fa-location-arrow font-2" />
                            <div className="ms-2">Near By Location</div>
                  </Button>
            
            </div>

            <div className="search-div mt-3   display-flex align-item-center  background-white  border-radius-25 w-60 ms-auto me-auto p-1 ">
                  <Input type="text"  className="background-transparent ps-4 font-1-6" placeholder="What are you Looking For ?" />
                  <i className="fas fa-search background-secondary p-4 border-radius-circle" />
            </div>
      </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    min-height: 35vh;

    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchSection */
    

  .location{
    .show-btn{
      background: #29adad70; 
    }
  }


   
`;

export default SearchSection;
