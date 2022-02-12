import styled from 'styled-components';
import FooterCol from './FooterCol';



function FooterComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="FooterComp-wrapper">

                 <div className="row ">
                         <div className="col-4 background-aqua">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>

                         <div className="col-2 background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                         <div className="col-2 background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                         <div className="col-2 background-aqu">
                                  <FooterCol title={"More from DirectDeal"} list={["Sell Fast","Doorstep Delivery","Membership","Banner Ads","Ad Promotions","Staffing solutions"]}></FooterCol>
                         </div>
                         <div className="col-2 background-aqu">
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
