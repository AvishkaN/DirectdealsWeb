import styled from 'styled-components';
import Button from '../../../../Components/UI/Button/Button';
import AddCircle from '@mui/icons-material/AddCircleOutlineOutlined';
import { SetShowPostAdFN } from '../../../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';




function PoadAdForm({className=""}) {


  const dispatch=useDispatch();

  const handleClick=(e)=>{


    // Post Ad 
    const PostAdButton=e.target.closest('#post-ad-ad');
    if(PostAdButton){

        dispatch(SetShowPostAdFN());

    }
}



  return (
    <DIV className={`${className} `}  onClick={handleClick}>
              <Button   id="post-ad-ad" className="font-1-5 display-flex align-item-center w-35 border-radius-5 justify-content-center" border={true} >
                         <AddCircle className='font-2-9'></AddCircle>
                         <div className="ms-2">  Post an Ad</div>
                </Button>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PoadAdForm */
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    min-height: 80vh;
    
    .PoadAdForm-wrapper{
      /* width: var(--PoadAdForm-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PoadAdForm;
