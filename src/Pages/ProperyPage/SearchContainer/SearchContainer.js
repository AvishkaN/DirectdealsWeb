import styled from 'styled-components';
import SearchContainerComp from './SearchContainerComp';
import BackgroundImg from "./../../../assets/img/PropertPageBackground.jpg";



function SearchContainer({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SearchContainer-wrapper">
                 <SearchContainerComp></SearchContainerComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: 5rem; 
    background-image:  url(${BackgroundImg});
    
    @media(max-width:1000px){     
                      display: none;
        }  



    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchContainer */
    
    .SearchContainer-wrapper{

        width: 95%;
        margin-left: auto;
        margin-right: auto;   
        /* background: red;  */
     
        

        min-height: 48vh;
        background-size: cover; 
        background-repeat: no-repeat; 
        border-radius: 10px; 
        background-position: 14% 27%;


        
      


    }
`;

export default SearchContainer;
