import styled from 'styled-components';
import Password from './../Register/Password';
import Input from './../Register/Input'; 
import Bottom from './../Register/Bottom';



function RegistarPage({className=""}) {
  return (
    <DIV className={`${className} display-flex align-items-center`}>
         <div className="RegistarPage-wrapper p-5 border-radius-10  ">
                 <h2 className='text-center fw-bold text-color-primary'>Login</h2>    

                 <Input className="input w-100 p-2  ps-3 mt-4" placeholder='email'></Input>  
                 <Password className="input w-100 p-2  ps-3 mt-4"   placeholder='password'></Password>

                 <Bottom btnText="LOGIN" secondText="Sign Up" to="/register" ></Bottom>
         
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RegistarPage */
    min-height: 100vh; 
    
    .RegistarPage-wrapper{
        width: 30%;
        box-shadow: -2px 5px 11px 0px #b6a2a2;
        margin-left: auto;
        margin-right: auto; 
        /* border:2px solid black; */

        
        @media(max-width:940px){     
                      width: 60%; 
        }
        @media(max-width:528px){     
            width: 94%;  
        }


        input{
            border:1px solid gray;
            border-radius: 20px;  
        }

        .social-media-container{
            .social{
                .social-media-btn{
                    border:2px solid black;

                    svg{    
                        width: 23px;
                        height: 23px;
                    }
                }
            }
        }

        .btn-register{
            &:hover{

                color: var(--text-color-primary);
            }
        
        }

    }
`;

export default RegistarPage;
