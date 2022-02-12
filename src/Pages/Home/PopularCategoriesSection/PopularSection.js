import styled from 'styled-components';
import ListSection from './ListSection';



function PopularCategories({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="PopularCategories-wrapper">
                <div className="popularCategoriesRowTitle font-2-5">Popular Categories</div>

                <div className="popularCategories-ul">

                      <ListSection className='mt-3'></ListSection>


                </div>
      


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PopularCategories */
    
    .PopularCategories-wrapper{
      /* width: var(--PopularCategories-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PopularCategories;
