import styled from 'styled-components';



function PublishedAds({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PublishedAds-wrapper">
         <h1>Published Ads</h1>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PublishedAds */
    
    .PublishedAds-wrapper{
      /* width: var(--PublishedAds-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PublishedAds;
