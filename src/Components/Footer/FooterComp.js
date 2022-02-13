import styled from 'styled-components';
import FooterCol from './FooterCol';
import FirstCol from './FirstCol';



function FooterComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="FooterComp-wrapper pt-5 pb-5">

                 <div className="row gy-5">

                         <div className="col-lg-4  col-sm-6  background-aqu">
                                 <FirstCol></FirstCol>
                         </div>

                         <div className="col-lg-2  col-sm-6  background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                         <div className="col-lg-2  col-sm-6  background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                         <div className="col-lg-2  col-sm-6  background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                         <div className="col-lg-2  col-sm-6  background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                 </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FooterComp */
    
    .FooterComp-wrapper{
      /* width: var(--FooterComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default FooterComp;
