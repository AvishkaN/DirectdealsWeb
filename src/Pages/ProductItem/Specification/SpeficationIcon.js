import styled from 'styled-components';



function SpeficationIcon({className="",svgIcon,label,txt}) {
  return (
    <DIV className={`${className} display-flex pb-1`}>

               {svgIcon}

               <div className="col-sm-4 col-5"> 

                        <div className=" background-aqu  font-1-6 text-color-grey-light ms-4">{label}</div>
               </div>


                  <div className="col-sm-3  col-4  ">

                          <div className=" background-yello font-1-6 fw-bold">{txt}</div>
                  </div>

            

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    border-bottom: 1px solid #b7b8b952;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SpeficationIcon */
    
   
`;

export default SpeficationIcon;
