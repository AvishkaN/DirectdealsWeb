import styled from 'styled-components';
import Button from '../../../../Components/UI/Button/Button';
import AddCircle from '@mui/icons-material/AddCircleOutlineOutlined';



function PoadAdForm({className=""}) {
  return (
    <DIV className={`${className} `}>
              <Button   id="post-ad-ad" className="font-1-5 display-flex align-item-center w-35 border-radius-5 justify-content-center" border={true}>
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
    
    .PoadAdForm-wrapper{
      /* width: var(--PoadAdForm-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default PoadAdForm;
