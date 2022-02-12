import { useState } from 'react';
import styled from 'styled-components';
import SearchFilterNav from './SearchFilterNav';
import SearchFilterRow2 from './SearchFilterRow2';



function SearchFilter({className=""}) {

  const [selectedNav,SetSelectedNav]=useState('filter-nav-1');

  return (
    <DIV className={`${className}`}>
         <div className="SearchFilter-wrapper">
                <SearchFilterNav  selectedNav={selectedNav} SetSelectedNav={SetSelectedNav}></SearchFilterNav>
                <SearchFilterRow2 className='pe-3 ps-3 pt-3 pb-3 '  selectedNav={selectedNav} SetSelectedNav={SetSelectedNav}></SearchFilterRow2>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
   
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SearchFilter */
    
    .SearchFilter-wrapper{
      /* width: var(--SearchFilter-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default SearchFilter;
