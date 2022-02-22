import styled from 'styled-components';



function MyMembership({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MyMembership-wrapper">
         <h1>My MemberShip</h1>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MyMembership */
    
    .MyMembership-wrapper{
      /* width: var(--MyMembership-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default MyMembership;
