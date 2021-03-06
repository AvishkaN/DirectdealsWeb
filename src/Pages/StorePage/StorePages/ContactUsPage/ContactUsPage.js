import styled from 'styled-components';
import FooterContactDetailsItem from '../../StoreFooter/FooterContactDetailsItem';



function ContactUsPage({className="",storeData}) {
  return (
    <DIV className={`${className}`}>
         <div className="ContactUsPage-wrapper">
             <div className="row">

                <div className="col-8 ContactUsPage-section  box-shadow-normal mt-2 mb-4 ms-auto me-auto  p-3">

                    <h2 className='fw-bold mt-2'>Contact Infomation</h2>

                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'Address'} PlaceName={storeData.storeName}    detail={storeData.Adress} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'E-mail'}  detail={storeData.EMail} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'Mobile'}  detail={storeData.Mobile} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'WhatsApp Number'}  detail={storeData.WhatsAppNumber} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'Open Time'}  detail={storeData.Open} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'Close Time'}  detail={storeData.Close} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'Facebook'}  detail={storeData.Facebook}  socialMedia={true} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'YouTube'}  detail={storeData.YouTube}  socialMedia={true} />
                    <FooterContactDetailsItem   className='mt-4  footer-contact-detail-item  ' label={'Twitter'}  detail={storeData.Twitter}  socialMedia={true} />
               
               
               
               
                </div>

             </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    min-height:60vh;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .ContactUsPage-wrapper{

      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 

    }

    .ContactUsPage-section{

      @media(max-width:756px){     
        width: 95%;
        }

    }


    .footer-contact-detail-item{
          color: var(--color-light-grey);
    }
`;

export default ContactUsPage;
