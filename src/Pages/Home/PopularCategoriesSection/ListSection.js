import styled from 'styled-components';
import ListColumn from './ListColumn';
import Car from '@mui/icons-material/DirectionsCarFilledOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';


import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import FactoryIcon from '@mui/icons-material/Factory';

import ChairIcon from '@mui/icons-material/Chair';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


function ListSection({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ListSection-wrapper">
                <div className="row justify-content-space-between gy-6">
                    <div className="col-md-2">
                        <ListColumn title={"Motors"} number={154}  SvgIcon={<Car  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Property for Rent"} number={154}  SvgIcon={<ApartmentIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Property for Sale"} number={154}  SvgIcon={<MapsHomeWorkIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Classifieds"} number={154}  SvgIcon={<LocalLaundryServiceIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Jobs"} number={154}  SvgIcon={<WorkIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>


                    <div className="col-md-2">
                        <ListColumn title={"Community"} number={154}  SvgIcon={<GroupIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Home Appliances"} number={154}  SvgIcon={<LocalLaundryServiceIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Business & Industrial"} number={154}  SvgIcon={<FactoryIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Furniture & Garden"} number={154}  SvgIcon={<ChairIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>
                    <div className="col-md-2">
                        <ListColumn title={"Mobile Phones & Tablets"} number={154}  SvgIcon={<PhoneAndroidIcon  className='font-2 color-primary text-color-primary '/>}></ListColumn>
                    </div>

                   
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ListSection */
    
    .ListSection-wrapper{
      /* width: var(--ListSection-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .col-md-2{

            @media(min-width:768px){
                width: 20%;

            }
        }

    }
`;

export default ListSection;
