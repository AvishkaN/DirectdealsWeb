import styled from 'styled-components';
import Link from '../UI/Link/Link';



function FooterCol({className="",title,list}) {
  return (
    <DIV className={`${className} FooterCol`}>
         <div className="FooterCol-wrapper display-flex">
                <div className='fw-bold font-1-6 mb-3'>{title}</div>
               
               {list.map(li=>(
                   <Link  className='footer-link font-light  font-1-6  ' to="/">{li}</Link>
                   
               ))}
               
               
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FooterCol */
    
    .FooterCol-wrapper{
      /* width: var(--FooterCol-content-width);
        margin-left: auto;
        margin-right: auto;  */
        flex-direction: column; 

        .footer-link{
            color: var(--color-primary);  

            &:hover{
                /* text-decoration: underline;   */
            }
        }

    }
`;

export default FooterCol;
