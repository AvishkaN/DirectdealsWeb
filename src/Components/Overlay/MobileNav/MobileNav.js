import styled from 'styled-components';
import MobileNavComp from './MobilrNavComp';



function MobileNav({className="",showNav=false}) {
  return (
    <DIV className={`${className}`}  showNav={showNav}>
         <div className="MobileNav-wrapper p-3">
             <MobileNavComp></MobileNavComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    border-radius: 0% 8% 8% 0%;
    background: #424e4e; 
    height: 100vh; 
    z-index: 15;
    
    transform: ${props => props.showNav? 'translateX(0%)' : 'translateX(-117%)'  };
    transition: .5s  transform;
    
    

    .mobile-navv{
          transition: all .2s;
          position: fixed;
          top: 0;
          left: 0;

          @media(max-width:600px){     
                      width: 48% !important;
          }
          @media(max-width:437px){     
                      width: 60% !important;
          }
          @media(max-width:345px){     
                      width: 70% !important;
          }


        }


    
    .MobileNav-wrapper{

      

    }
`;

export default MobileNav;
