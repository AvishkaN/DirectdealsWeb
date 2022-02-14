import styled from 'styled-components';
import FooterContactDetailsItem from './FooterContactDetailsItem';
import Map from './../../../Components/UI/Map/Map';
// import FooterContactDetailsItem from './../../../Components/UI/';



function StoreFooter({className="",storeData}) {
  return (
    <DIV className={`${className}`}>
         <div className="StoreFooter-wrapper  background-aqu text-color-white pt-5 pb-2">
               <div className="row h-100">
                   {/* Details */}
                   <div className="col-6">
                            <FooterContactDetailsItem  className=''  label={'Address'}  detail={storeData.Adress} />
                            <FooterContactDetailsItem   className='mt-4' label={'E-mail'}  detail={storeData.EMail} />
                            <FooterContactDetailsItem   className='mt-4' label={'Telephone'}  detail={storeData.Telephone} />
                            <FooterContactDetailsItem   className='mt-4' label={'Mobile'}  detail={storeData.Mobile} />
                   </div>

                   {/*Map  */}
                   <div className="col-6 overflow-hidden">
                            <Map className='h-100 border-radius-5'></Map>
                   </div>




                   {/* CopyRight */}
                   <div className="text-color-ccc mt-5 text-center">
                        © {storeData.storeName}. All rights reserved. 
                            <span> | </span>
                        Copyright © 2018 SaleMe.lk PVT LTD 
                   </div>
               </div>
         </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background: #252122;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreFooter */
    /* height:47vh; */
    height: 30rem;
    
    .StoreFooter-wrapper{
      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 


        height: 100%;


    }
`;

export default StoreFooter;
