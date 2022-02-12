import styled from 'styled-components';
import FooterCol from '../../../Components/Footer/FooterCol';



function LinkSection({className=""}) {
  return (
    <DIV className={`${className} mt-6`}>
         <div className="LinkSection-wrapper">
                <div className="row gy-5 justify-content-space-between">

                    <div className="col-6   col-lg-3  Link-col ">
                     <FooterCol  className='linkk'   title={"Apartments for sale"} list={["Apartments for sale in Al Haiyir ","Apartments for sale in Al Muwaiji","","",""]}></FooterCol>

                    </div>

                    <div className=" col-6   col-lg-3    Link-col">
                     <FooterCol  className='linkk'   title={"Villas for sale"} list={["Villas for sale in Al Khabisi ","Villas for sale in Al Bateen","Villas for sale in Abu Huraybah","Villas for sale in Al Rawdha","Villas for sale in Al Zahir","Villas for sale in Al Zahir","Villas for sale in Al Zahir"]}></FooterCol>

                    </div>
                    <div className=" col-6   col-lg-3    Link-col">
                     <FooterCol className='linkk'    title={"Commercial buildings for sale"} list={["Apartments for sale in Al Haiyir ","Apartments for sale in Al Muwaiji","","",""]}></FooterCol>

                    </div>
                    <div className=" col-6   col-lg-3    Link-col">
                     <FooterCol className='linkk'    title={"Lands for sale"} list={["Apartments for sale in Al Haiyir ","Apartments for sale in Al Muwaiji","","",""]}></FooterCol>

                    </div>

                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only LinkSection */
    
    .LinkSection-wrapper{
      /* width: var(--LinkSection-content-width);
        margin-left: auto;
        margin-right: auto;  */

       .linkk{
            .footer-link{     
            color: var(--color-black);
        }

        
    }
    .col-sm-6{         

            /* @media (min-width: 475px){
                        flex: 0 0 auto !important;    
                        width: 50% !important;   
                        text-align: center;   
            } */
            
            .FooterCol{   
                
                .FooterCol-wrapper{      
                    /* background: red;    */

                    @media (max-width: 475px){
                        align-items: center;    
                    }
                }
                
            }
     }

}
`;

export default LinkSection;
