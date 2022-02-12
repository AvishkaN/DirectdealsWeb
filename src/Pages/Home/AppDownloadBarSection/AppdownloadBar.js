import styled from 'styled-components';
import DownladStore from './DownladStore';



function AppDownloadBar({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="AppDownloadBar-wrapper">
                <div className="row align-items-center justify-content-space-around">
                    <div className="col-5 app-download-left "> 
                        <h2 className='text-center fw-bold'>Find amazing deals on the go.</h2>
                        <h2 className='text-center text-color-primary fw-bold'>Download the app now!</h2>
                    </div>
                    <div className="col-2 app-download-center">
                        <img src="https://alain.dubizzle.com/static/home/img/icons/app-icons/app_download_preview.png" alt="" />
                    </div>
                    <div className="col-3 app-download-right display-flex align-items-center">
                            <DownladStore className='w-100' imgSrc={"https://alain.dubizzle.com/static/home/img/icons/app-icons/apple-store.png"}></DownladStore>
                            <DownladStore className='w-100' imgSrc={"https://alain.dubizzle.com/static/home/img/icons/app-icons/get_it_on_dubizzle.png"}></DownladStore>
                    </div>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only AppDownloadBar */
    
    .AppDownloadBar-wrapper{
      /* width: var(--AppDownloadBar-content-width);
        margin-left: auto;
        margin-right: auto;  */
        /* background-color: var(--color-grey);  */
        background-color: var(--color-grey);
        

        background: linear-gradient(to right,#fff,#f3f3f3,#f1f1f1,#efe9e9);  
        border-radius: 10px; 

 


        .app-download-left{
            
        }
        .app-download-center{

        }
        .app-download-right{

        }

    }
`;

export default AppDownloadBar;
