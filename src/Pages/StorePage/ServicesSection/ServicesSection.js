import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';
import ShowMoreTxt from '../../../Components/UI/ShowMoreTxt/ShowMoreTxt';

const Img = 'https://www.saleme.lk/saleme/images/prime-members/8/saleme_service_5a829d150ddf3.jpg';




function ServicesSection({className=""}) {
  return (
    <DIV className={`${className} `}>
      <Link to="/store/Services">
            <div className="ServicesSection-wrapper background-aqu ">

              <div className="row justify-content-center">
                    <div className="col-6 text-center box-shadow-normal ms-3 me-3 mt-2 mb-3 pt-5 pb-5 ps-3 pe-3">
                      
                            <img className='border-radius-circle' src={Img} alt="" />

                            <div className="">
                                <h3 className="title fw-bold  mt-5">PAYMENT OPTIONS / LEASING FACILITY</h3>
                                <div className="description">

                                    
                                      <ShowMoreTxt className='text-center font-1-5 text-color-grey-ori' showMoreTextClassName={'text-color-black fw-bold '}  paragraph={' LEASING FACILITY - You can obtain a leasing facility from any government , private bank or finance company in Sri Lanka, when you are purchase our motor bikes. Once you pay the reservation, will finalize all documentation required for your leasing facility under the direction.We provide all the documents and arrange the leasing facility through our officer.'} words={20}/>


                                </div>
                            </div>

                    </div>
              </div>



            </div>
      </Link>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ServicesSection */
    
    .ServicesSection-wrapper{
      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default ServicesSection;
