import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
const UserPictureFrame = styled(Box)({
  position: 'relative',
  width: '482.43px',
  height: '489.97px',
  left: '120px',
  top: '399px',
  background: '#FFFFFF',
  boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.75)',
  borderRadius: '30.1519px'
});

const ProfilePhoto = styled(Box)({
  position: 'absolute',
  width: '303px',
  height: '303px',
  left: '89px',
  top: '42px'
});
const Rectangle114 = styled(Box)({
  position: 'absolute',
  width: '303px',
  height: '303px',
  background: 'url(/images/man_profile.png), #FBB03B',
  borderRadius: '156.186px',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});
const Image6 = styled(Box)({
  position: 'absolute',
  width: '100px',
  height: '100px',
  left: '291px',
  top: '260px',
  background: 'url(/images/camera.png), #7185E7',
  borderRadius: '20px'
});
const UserName = styled(Typography)({
  position: 'absolute',
  width: '177px',
  height: '33px',
  left: '152.27px',
  top: '367.85px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '27.1367px',
  lineHeight: '33px',
  color: '#7185E7'
});
const UserEmail = styled(Typography)({
  position: 'absolute',
  width: '172px',
  height: '26px',
  left: '155.29px',
  top: '413.08px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '21.1063px',
  lineHeight: '26px',
  color: '#888888'
});
const Ellipse58 = styled(Box)({
  position: 'absolute',
  width: '303px',
  height: '303px',
  background: 'url(/images/man_profile.png)'
});
const UserPicture = () => {
  return (
    <UserPictureFrame>
      <ProfilePhoto>
        <Rectangle114 />
      </ProfilePhoto>
      <Image6 />
      <UserName>@UserNameText</UserName>
      <UserEmail>UserEmail@gmail.com</UserEmail>
    </UserPictureFrame>
  );
};

export default UserPicture;
