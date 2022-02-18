import styled from 'styled-components';



function WarText({className=""}) {
  return (
    <DIV className={`${className} border-radius-5 `}>
         <div className="WarText-wrapper text-center   p-2">

                <p className='font-1-5'>
                     Do not pay for the item on the internet, telephone networks or bank networks before checking out or checking the seller. 
                </p>

                <p className='font-1-5'>
                අදාළ අයිතමය පරික්ෂාවට හෝ විකුණුම්කරු මුණගැසීමට පෙර අන්තර්ජාලය, දුරකථන ජාල හා බැංකු ජාල හරහා මුදල් ගෙවීමෙන් වලකින්න. 
                </p>



         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    border:1px solid var(--color-red);
    color:#ca2929;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only WarText */
    
    .WarText-wrapper{
      /* width: var(--WarText-content-width);
        margin-left: auto;
        margin-right: auto;  */


    }
`;

export default WarText;
