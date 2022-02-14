import styled from 'styled-components';



function ContactDeatilsItem({className="",label,detail}) {
  return (
    <DIV className={`${className} display-flex align-items-center`}>
          <div className="">{label}</div>
          <div className="">{detail}</div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ContactDeatilsItem */
    
`;

export default ContactDeatilsItem;
