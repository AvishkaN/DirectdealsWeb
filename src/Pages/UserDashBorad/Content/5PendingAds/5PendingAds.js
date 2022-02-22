import styled from 'styled-components';



function PendingAds({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PendingAds-wrapper">
           <h1>Pending Ads</h1>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PendingAds */
    
    .PendingAds-wrapper{
      /* width: var(--PendingAds-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PendingAds;
