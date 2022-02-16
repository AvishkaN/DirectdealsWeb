import styled from 'styled-components';



function MobileNavItem({className="",svgIcon,ItemName}) {
  return (
    <DIV className={`${className} display-flex align-items-center `}>

             {svgIcon}
             <div className="font-2 ms-3">{ItemName}</div>
                
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MobileNavItem */
    


`;

export default MobileNavItem;
