import styled from 'styled-components';



function NavItemRow({className="",svgIcon,text,id}) {
  return (
    <DIV id={id} className={`${className} display-flex align-items-center`}>
            {svgIcon}
            <div className="text font-1-4 ms-3 text-color-grey-ori">
                {text}
            </div>
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
