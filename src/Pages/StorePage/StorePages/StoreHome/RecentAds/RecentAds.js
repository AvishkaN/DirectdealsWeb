import styled from 'styled-components';
import Ad from '../../../Ad/Ad';



function RecentAds({className="",store,sliceNum=-1}) {
  return (
    <DIV className={`${className}`}>
         <div className="RecentAds-wrapper">


             <div className="row justify-content-between gy-5">
                {
                    [...store.allAds.slice(sliceNum)].map(ad=>(
                        <div key={Math.random()} className="ad-col col-3 p-0 ms-3 me-3 mt-4 mb-3">
                                <Ad  className='cursor-p' adDetails={ad}></Ad>
                        </div>
                    ))
                }

             </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RecentAds */
    
    .RecentAds-wrapper{
      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 

        .ad-col{
            box-shadow: 0 2px 16px 0 rgba(0,0,0,0.1);
            width: 29%;
        }

    }
`;

export default RecentAds;
