import styled from 'styled-components';
import Button from '../../../Components/UI/Button/Button';
import Input from '../../../Components/UI/Input/Input';
import Password from '../../../Components/UI/Input/PasswordInput/Password';
import CommonComp from '../CommonComp';




function RegisterPage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="RegisterPage-wrapper">

             
         <CommonComp className={`${className} display-flex align-items-center `}>


                    <Input className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5"   placeholder='Name *'></Input>
                    <Input className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5"   placeholder='Email Address *'></Input>
                    <Password className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5"   placeholder='password *'></Password>
                    <Password className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5"   placeholder='Confirm password *'></Password>
                    {/* <Password className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5"   placeholder='password *'></Password> */}
                    {/* <Password className="input w-100 p-2  ps-3 mt-5  font-1-6  border-radius-5"   placeholder='Confirm password *'></Password> */}




                    {/* Button */}
                    <div className="text-right">
                                  <Button className='background-primary border-radius-5  text-color-white mt-4 w-60 font-1-6 p-2'  >Register</Button>
                    </div>


                        {/* Term and Condions */}
                    <div className="font-1-2 cursor -p   text-center text-sm-end  mt-4">  
                                By login you agree to 
                                <a href="" className='font-1-1 me-1 ms-1' > Terms-Conditions</a>
                                    and 
                                <a href="" className='font-1-1 ms-1' >Privacy-Policy</a>
                         
                    </div>


        </CommonComp>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RegisterPage */
    
    .RegisterPage-wrapper{
      /* width: var(--RegisterPage-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default RegisterPage;
