import styled from 'styled-components';



function Description({className=""}) {
  return (
    <DIV className={`${className}`}>

        <h2 class="fw-bold font-2-5">Description</h2>


         <div className="Description-wrapper">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit veniam incidunt culpa optio repudiandae 
                deleniti placeat harum necessitatibus omnis! Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur, at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit veniam incidunt culpa optio repudiandae 
                deleniti placeat harum necessitatibus omnis! Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur, at!

                 <br className='mt-3'/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit veniam incidunt culpa optio repudiandae 
                deleniti placeat harum necessitatibus omnis! Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur, at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit veniam incidunt culpa optio repudiandae 
                deleniti placeat harum necessitatibus omnis! Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur, at!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit veniam incidunt culpa optio repudiandae 
                deleniti placeat harum necessitatibus omnis! Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur, at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit veniam incidunt culpa optio repudiandae 
                deleniti placeat harum necessitatibus omnis! Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Tenetur, at!
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Description */
    
    .Description-wrapper{
      /* width: var(--Description-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default Description;
