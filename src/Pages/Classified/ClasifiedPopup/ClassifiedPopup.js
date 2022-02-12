import styled from 'styled-components';
import PopUp from './../../../Components/Overlay/PopUp/PopUp';



function ClassifiedPopUp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ClassifiedPopUp-wrapper">
                <PopUp className=''>
                          catttttttt
                </PopUp>    
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassifiedPopUp */
    
    .ClassifiedPopUp-wrapper{
      /* width: var(--ClassifiedPopUp-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default ClassifiedPopUp;
