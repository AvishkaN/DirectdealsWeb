import styled from 'styled-components';
import RightArrow from '../../../Components/UI/Arrow/ShortArrows/RightArrow';




function NavItemRow({className="",svgIcon,text,id}) {
  return (
    <DIV id={id} className={`${className} display-flex align-items-center`}>
            {svgIcon}
            <div className="text font-1-5 ms-3 text-color-grey-ori w-82">
                {text}
            </div>

            <RightArrow className=''></RightArrow>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavItemRow */

    .text{
      font-family:sans-serif;
      @media(max-width:795px){     
            font-size: 1.4rem;
        }
    }
    
   
`;

export default NavItemRow;
