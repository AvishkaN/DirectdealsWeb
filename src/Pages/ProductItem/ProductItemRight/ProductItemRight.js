import styled from 'styled-components';
import StoreName from './StoreName';
import Button from './../../../Components/UI/Button/Button';

import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import Clock from '@mui/icons-material/AccessTimeOutlined';

import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';



function ProductItemRight({className="",product}) {
  return (
    <DIV className={`${className} ms-3 me-3  box-shadow-normal  mt-1 p-3`}>
         <div className="ProductItemRight-wrapper">

                    {/*Store Name  */}
                <StoreName product={product} ></StoreName>

                {/* TWO details --> location , time */}

                <div className="two-details row mt-4">
                        <div className="col-6 display-flex align-items-center">
                                    <LocationIcon className='font-3 text-color-primary  '></LocationIcon>

                                    <div className="ms-2">
                                        <div className="">Location</div>
                                        <div className="fw-bold mt-0-5- font-1-3">{product.Location}</div>
                                    </div>
                        </div>

                        <div className="col-6 display-flex align-items-center">
                                    <Clock className='  font-2-8 text-color-primary  '></Clock>

                                    <div className="ms-2">
                                        <div className="">Ad Updated</div>
                                        <div className="fw-bold mt-0-5- font-1-3">{product.UpdateTime}</div>
                                    </div>
                        </div>
                </div>

                {/* CTA Section */}

                <div className="row mt-5">

                        {/* Call */}
                    <div className="col-6">
                                <a className='a   '  href={`tel:${product.MobileNumber} `}>
                                      <Button className=" w-100    background-black  text-color-white pt-2 pb-2 display-flex align-items-center justify-content-center ">
                                            <div className=""> <CallIcon className="font-2-2 me-2" ></CallIcon> </div>
                                            {/* <div className="font-1-6">{product.MobileNumber}</div> */}
                                            <div className="font-1-6">Call Now</div>
                                             
                                      </Button>
                                </a>
                    </div>

                    <div className="col-6">
                                <a className='a '  href={`mailto:${product.Email}?subject=your title&body=TThe message `}>
                                      <Button className="email-button  w-100      display-flex align-items-center justify-content-around ">
                                            <div className=""> <MailIcon className="font-2-2" ></MailIcon> </div>
                                            <div className="font-1-6">Email Now</div>
                                             
                                      </Button>
                                </a>
                    </div>






                </div>

                {/* Price */}
                <div className="cursor-p mt-5 font-2-3 fw-bold background-black text-color-grey-2  border-radius-5 display-flex justify-content-center">
                    <span className="font-inherit text-color-secondary">Rs:</span>
                      <span className="font-inherit "> &nbsp; {product.Price}</span> 
                      
                </div>




         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProductItemRight */
    
    .ProductItemRight-wrapper{
      /* width: var(--ProductItemRight-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .email-button{
            border: 2px solid var(--color-black);
        }

    }
`;

export default ProductItemRight;
