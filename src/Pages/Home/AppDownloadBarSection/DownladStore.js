import styled from 'styled-components';



function AppDownload({className="",imgSrc}) {
  return (
    <DIV className={`${className} w-100`}>
         <div className="AppDownload-wrapper w-100">
                <img src={imgSrc} alt=""  className='w-100'/>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AppDownload */
    
    .AppDownload-wrapper{
      /* width: var(--AppDownload-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default AppDownload;
