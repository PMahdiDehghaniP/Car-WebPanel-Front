// pages/change-profile.tsx
'use client';
import { Box ,useTheme,useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import UserPicture from "./userPictureFram/user6";
import CoverSection from "./Cover/cover";
import PersonalContainer from "./PersonalInfo/info";
const ChangeProfileContainer=styled(Box)({
  position:'absolute',
  height: '2400px',
  width:'1920px',
  background: '#F7F7F8',
});

const MobileProfileContainer = styled(Box)({
  position: 'relative',
  width: '468px',
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
      <PersonalContainer>
        
      </PersonalContainer>
      <UserPicture>

      </UserPicture>
    </Container>
  );
}
export default ChangeProfile;