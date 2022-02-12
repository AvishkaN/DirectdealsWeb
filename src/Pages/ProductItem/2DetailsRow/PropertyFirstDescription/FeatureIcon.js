import styled from 'styled-components';



function FeatureIcon({className="",svgIcon,text}) {
  return (
    <DIV className={`${className} display-flex align-item-center`}>
            {svgIcon}
            <div className="ms-2 font-1-6">
                        {text}
            </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only FeatureIcon */
    
    .FeatureIcon-wrapper{
      /* width: var(--FeatureIcon-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default FeatureIcon;
