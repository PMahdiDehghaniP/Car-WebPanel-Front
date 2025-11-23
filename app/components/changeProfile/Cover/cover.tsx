import { Box ,Button , useTheme,useMediaQuery} from '@mui/material';
import { styled } from '@mui/material/styles';

const Cover = styled(Box)({
  position: 'absolute',
  width: '1921px',
  height: '290px',
  left: '0px',
  top: '97px',
  background:'url(/images/cover_photo.png)'
});
const ChangeProfileButton = styled(Button)({
  position: 'absolute',
  width: '189.53px',
  height: '49.23px',
  left: '1680px',
  top:'200px',
  background: '#7185E7',
  border: '1.10191px solid rgba(118, 101, 101, 0.4)',
  borderRadius: '11.0191px',
  fontFamily: 'Vazirmatn',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '19.8345px',
  lineHeight: '31px',
  color: '#FFFFFF',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: '#5a6fd6',
  },
});
const MobileCoverContainer = styled(Box)({
  position: 'absolute',
  width: '468px',
  height: '178px',
  left: '0px',
  top: '96px',
  background:'url(/images/cover_photo.png)'
});
const MobileChangeProfileButton = styled(Button)({
  position: 'absolute',
  width: '119.09px',
  height: '36.04px',
  left: '339px',
  top: '120px',
  background: '#7185E7',
  border: '0.806688px solid rgba(118, 101, 101, 0.4)',
  borderRadius: '8.06688px',
  fontFamily: 'Vazirmatn',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '14.5204px',
  lineHeight: '23px',
  color: '#FFFFFF',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'auto',
  padding: 0,
  '&:hover': {
    background: '#5a6fd6',
  },
});
const CoverSection = () => {
    const theme = useTheme();
    const ismobile = useMediaQuery(theme.breakpoints.down('md'));
    if (ismobile) {
    return (
      <MobileCoverContainer>
        
        <MobileChangeProfileButton>
          تغییر عکس کاور
        </MobileChangeProfileButton>
      </MobileCoverContainer>
    );
  }
  return (
    <Cover>
      <ChangeProfileButton>
        تغییر عکس کاور
      </ChangeProfileButton>
    </Cover>
  );
};

export default CoverSection;