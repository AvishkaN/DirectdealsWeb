import styled from 'styled-components';



function MyAccount({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MyAccount-wrapper">
                <h1>My Acount</h1>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyAccount */
    
    .MyAccount-wrapper{
      /* width: var(--MyAccount-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default MyAccount;
