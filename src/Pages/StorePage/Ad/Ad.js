import styled from 'styled-components';
import Location from '@mui/icons-material/LocationOn';
import Clock from '@mui/icons-material/WatchLater';



function Ad({className="",adDetails}) {
  return (
    <DIV className={`${className}`}>
         <div className="Ad-wrapper">
                <div className="row">

                    <div className="col-12">
                        <img src={adDetails.adPhot} className='w-100' alt="" />
                    </div>

                    <div className="ad-details ps-4 pe-4 pb-4">

                                    <div className="font-2 mt-3">{adDetails.adName}</div>

                                    <div className="text-color-grey-ori mt-2">
                                        <Location className=' font-2 '></Location>
                                        {adDetails.location+' >'}  {adDetails.location}
                                    </div>

                                    <div className="font-1-7 fw-bold mt-2">
                                            {adDetails.price}
                                    </div>


                                    <div className="text-color-grey-ori font-1-5 mt-3">
                                            {adDetails.description}
                                    </div>

                                    <div className="time-and-date mt-3 text-color-grey-ori display-flex align-items-center justify-content-end">
                                        <Clock/>
                                        <div className="font-1-3 ms-2">  {adDetails.timeAndDate} </div>
                                    

                                    </div>
                    </div>


                    
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Ad */
    
    .Ad-wrapper{
     

    }
`;

export default Ad;
