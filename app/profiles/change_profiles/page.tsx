// pages/change-profile.tsx
'use client';
import { Box ,useTheme,useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import UserPicture from "./userPictureFrame/user6";
import CoverSection from "./Cover/cover";
import PersonalInfo from "./PersonalInfo/info";
import Footer from '../../components/Home/Footer';
const ChangeProfileContainer=styled(Box)({
  position:'absolute',
  height: '2400px',
  width:'100%',
  background: '#F7F7F8',
});

const MobileProfileContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '1427px',
  background: '#F7F7F8',
});
const ChangeProfile = ()=>{
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const Container = isMobile? MobileProfileContainer : ChangeProfileContainer;
  return(
      
    <Container>
      <CoverSection>

      </CoverSection>
     
      <UserPicture>

      </UserPicture>
      <PersonalInfo/>
      <Footer/>
    </Container>
  );
}
export default ChangeProfile;