import styled from 'styled-components';
import Slider from './Slider';



function SliderRow({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SliderRow-wrapper">
            <Slider></Slider>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .SliderRow-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default SliderRow;
