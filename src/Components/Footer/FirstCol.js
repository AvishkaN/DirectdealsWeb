import styled from 'styled-components';



function FirstCol({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="FirstCol-wrapper">
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FirstCol */
    
    .FirstCol-wrapper{
      /* width: var(--FirstCol-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default FirstCol;
