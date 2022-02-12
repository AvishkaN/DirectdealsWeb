import styled from 'styled-components';
import Button from './../../../../Components/UI/Button/Button';



function Form({className=""}) {
  return (
    <DIV className={`${className} mt-3 `}>

            <h2 class="fw-bold font-2-4 text-center">Inquire About the Ad</h2>
               <form className='mt-2'>
                    <div className="mb-3 display-flex  display-flex-direction-column">
                        <label htmlFor="exampleInputEmail1" className="form-label font-1-3">Your message</label>
                        <textarea  className='textarea border-radius-5 p-2' id="w3review" name="w3review" rows="4" cols="50">
                        Marhaba! I saw your ad on dubizzle. When is it available for viewing? Thanks.                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label font-1-3">Your email</label>
                        <input type="email" className="form-control pt-3 pb-3 font-1-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label font-1-3">Email address</label>
                        <input type="email" className="form-control pt-3 pb-3 font-1-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label font-1-3">Your phone</label>
                        <input type="email" className="form-control pt-3 pb-3 font-1-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 mt-5">

                            <Button className='form--btnn background-primary border-radius-5 p-3 font-1-5  text-color-white'  text={"Inguire Now"}></Button>
                    </div>


                </form>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Form */

    .form--btnn{

      &:hover{
        color:var(--color-white);  
      }

    }
    
  
`;

export default Form;
