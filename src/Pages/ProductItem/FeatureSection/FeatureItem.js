import styled from 'styled-components';



function FeatureIcon({className="",txt,svgIcon}) {
  return (
    <DIV className={`${className}  display-flex  align-items-center `}>

                            <div className="background-secondary text-color-link border-radius-circle display-flex">

                                    {svgIcon}  
                            </div>
                        <div className="ms-3"> {txt}</div>
                
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
