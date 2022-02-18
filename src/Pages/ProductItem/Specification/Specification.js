import styled from 'styled-components';
import SpeficationIcon from './SpeficationIcon';
import FlagIcon from '@mui/icons-material/OutlinedFlag';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import CalenderIcon from '@mui/icons-material/DateRangeOutlined';



function SpecificationSection({className="",product}) {
  return (
    <DIV className={`${className}`}>
         <div className="SpecificationSection-wrapper">

             <div className=" mt-3">

             {
                product.specifications.map((speficationitem)=>(

                    <SpeficationIcon  key={Math.random()} svgIcon={speficationitem.svgIcon} label={speficationitem.label}  txt={speficationitem.txt}  className="mt-4"   ></SpeficationIcon>
                ))
            }
                    {/* <SpeficationIcon svgIcon={<FlagIcon className='w-5 font-2-7'></FlagIcon>}  label={"Brand"} txt={"KIA"} ></SpeficationIcon>
                    <SpeficationIcon svgIcon={<ArticleIcon className='w-5 font-2-7'></ArticleIcon>}  label={"Model"} txt={"KIA"} ></SpeficationIcon>
                    <SpeficationIcon svgIcon={<CalenderIcon className='w-5 font-2-7'></CalenderIcon>}  label={"Model Year"} txt={"KIA"} ></SpeficationIcon>
                    <SpeficationIcon svgIcon={<FlagIcon className='w-5 font-2-7'></FlagIcon>}  label={"Engine capacity"} txt={"KIA"} ></SpeficationIcon>
                    <SpeficationIcon svgIcon={<FlagIcon className='w-5 font-2-7'></FlagIcon>}  label={"Body Type"} txt={"KIA"} ></SpeficationIcon> */}
             </div>
         
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SpecificationSection */
    
    .SpecificationSection-wrapper{
      /* width: var(--this-page-size); */
        /* margin-left: auto; */
        /* margin-right: auto;  */

    }
`;

export default SpecificationSection;
