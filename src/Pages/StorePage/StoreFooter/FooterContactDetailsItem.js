import styled from 'styled-components';



function ContactDeatilsItem({className="",label,detail}) {
  return (
    <DIV className={`${className} display-flex align-items-center`}>
          <div className="font-1-5 w-25 fw-bold">{label}</div>
          <div className=" ms-2 w-75">{detail}</div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ContactDeatilsItem */
    color:#ccc;
`;

export default ContactDeatilsItem;
