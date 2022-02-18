import styled from 'styled-components';



function SummaeyIcon({className="",svgIcon,label,txt}) {
  return (
    <DIV className={`${className} display-flex `}>
        {svgIcon}
        <div className=" ms-2">

                <div className="font-1-3">{label}</div>
                <div className="fw-bold ">{txt}</div>
        </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    svg{ 
        background-color: #efeaea;
    }
 
`;

export default SummaeyIcon;
