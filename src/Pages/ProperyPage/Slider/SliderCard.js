import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';
// import Link from '../UI/Link/Link';




function SliderCard({className="",text="Apartment for Sale",backgroundImg}) {
  return (
      
      <Link  className='' to="/">
             <DIV className={`display-flex ${className}`} backImg={backgroundImg}>

                    <div className="SliderCard-wrapper display-flex">

                        <div className="ms-3 mb-3 fw-bold font-1-6 text-white">
                               {text}
                        </div>

                    </div>

    </DIV>
         </Link>

  );
}


const DIV=styled.div`
    width: 100%;
    background-image: url(${props => props.backImg});
    background-size: cover;   
    min-height: 30vh;  
    align-items: flex-end;  
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SliderCard */
    
    .SliderCard-wrapper{
      /* width: var(--SliderCard-content-width);
        margin-left: auto;
        margin-right: auto;  */


    }
`;

export default SliderCard;
