import styled from 'styled-components';



function MyAds({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MyAds-wrapper">
               <h1>My Ads</h1>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyAds */
    
    .MyAds-wrapper{
      /* width: var(--MyAds-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default MyAds;
