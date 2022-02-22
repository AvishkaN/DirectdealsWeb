import styled from 'styled-components';



function LogOut({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="LogOut-wrapper">
         <h1>Log Out</h1>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LogOut */
    
    .LogOut-wrapper{
      /* width: var(--LogOut-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default LogOut;
