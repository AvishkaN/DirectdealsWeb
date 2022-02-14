import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';

const links=["Home","All Ads","Services","Contact"];



function StoreNav({className=""}) {
  return (
    <DIV className={`${className}`}>
       <div className="display-flex justify-content-center align-items-center">
           {
               links.map(linkitem=>(
                   <Link to=""  className="ms-3  font-1-7  ps-2 pe-2 text-color-grey-ori">{linkitem}</Link>

               ))
           }

             <Link to="">
                 <img className=' ms-3 w-50  ' src={"https://www.saleme.lk/premium_assets/frontend/images/saleme-logo.png"} alt="" />
             </Link>

       </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreNav */
    
 
`;

export default StoreNav;
