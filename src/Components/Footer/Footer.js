import styled from 'styled-components';
import FooterComp from './FooterComp';




function Footer({className=""}) {
  return (
    <DIV className={`${className} `}>
         <div className="Footer-wrapper ">
                <FooterComp></FooterComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Footer */
    background-color: var(--color-grey-2);
    border-top:2px solid var(--color-green);
    
    .Footer-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default Footer;
