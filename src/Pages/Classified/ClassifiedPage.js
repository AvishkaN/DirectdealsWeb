import { useEffect } from 'react';
import styled from 'styled-components';
import ClassifiedComp from './ClassifiedComp';



function ClassfiedPage({className=""}) {

  useEffect(()=>{
    // scroll to top
    window.scroll(0, 0);

    if(document.documentElement.clientWidth>=600){
      
          const selectCSSClass= document.body.style;
          selectCSSClass.setProperty('--page-content-width', '80%');

    }

  },[]);

  return (
    <DIV className={`${className}`}>
         <div className="ClassfiedPage-wrapper">
                <ClassifiedComp></ClassifiedComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassfiedPage */
    margin-top: 10rem;   
    --classified-page-width:85%;
    
    @media(max-width:1000px){     
      --classified-page-width:93%;
    }


    
    .ClassfiedPage-wrapper{   
        /* width: var(--page-content-width); */
        
        /* width: 94%; */
        width: var(--classified-page-width);
        margin-left: auto;
        margin-right: auto; 
        /* background: yellow;  */


        @media(max-width:600px){
          width: 100%;  
        }

    }
`;

export default ClassfiedPage;
