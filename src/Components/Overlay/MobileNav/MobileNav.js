import styled from 'styled-components';
import MobilrNavComp from './MobilrNavComp';



function MobileNav({className="",showNav=false}) {
  return (
    <DIV className={`${className}`}  showNav={showNav}>
         <div className="MobileNav-wrapper p-3">
             <MobilrNavComp></MobilrNavComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    border-radius: 0% 8% 8% 0%;
    background: #424e4e; 
    height: 100vh; 
    
    
    /* transform: translateX(0%) !important; */
    
    transform: ${props => props.showNav? 'translateX(0%)' : 'translateX(-117%)'  };
    
    transition: .5s  transform;


    
    .MobileNav-wrapper{

        .MobileNav{

        }

    }
`;

export default MobileNav;
