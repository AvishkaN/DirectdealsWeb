import styled from 'styled-components';



function Page({className="",placeholder}) {
  return (
    <DIV >
         <input className={`${className}`} placeholder={placeholder}></input>  
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

`;

export default Page;
