import { Box ,Typography} from '@mui/material';
import ChangePasswordTitle from './Passwords/ChangePasswordText';
import PreviousPasswordLabel from './Passwords/PreviousPassword';
import PreviousPasswordInput from './Passwords/LastPasswordInput';
import NewPasswordLabel from './Passwords/NewPassword';
import NewPasswordInput from './Passwords/NewPasswordText';
import Checkpassword from './Passwords/CheckNewPassword';
import ForgotPasswordLink from './Passwords/ForgetPassword';
import ChangePasswordButton from './Passwords/PasswordButton';
import PersonalInfoTitle from './Informations/privateTitle';
import NameInput from './Informations/FirstNameChange';
import LastNameInput from './Informations/LastNameChange';
import EmailInput from './Informations/ChangeEmail';
import PhoneNumberInput from './Informations/PhoneNumber';
import TitleInput from './Informations/UserTitle';
import GenderDropdown from './Informations/Gender';
import BirthdateInput from './Informations/Birthdate';
import BiographyInput from './Informations/Biography';
const PersonalInfo = () => {
  return (
    <Box
  sx={{
    position: { xs: 'relative', sm: 'absolute' },
    width: { xs: 'calc(100vw - 40px)', sm: 'calc(100% - 80px)' }, // Use percentage
    maxWidth: { xs: 428, sm: 1123 },
    height: { xs: 526.71, sm: 1382 },
    left: { xs: 'auto', sm: '50%' }, // Center with transform
    top: { xs: 'auto', sm: 399 },
    transform: { xs: 'none', sm: 'translateX(-50%)' }, // Proper centering
    background: '#FFFFFF',
    boxShadow: {
      xs: '0px 1.14916px 2.29831px rgba(0, 0, 0, 0.19)',
      sm: '0px 3.01519px 6.03038px rgba(0, 0, 0, 0.19)'
    },
    borderRadius: {
      xs: '11.4916px',
      sm: '30.1519px'
    }
  }}
>
        <Box
      sx={{
        position: 'absolute',
        width: {
          xs: 131.87,
          sm: 346
        },
        height: {
          xs: 22.49,
          sm: 59
        },
        left:'60%',
        top: {
          xs: 19.82,
          sm: 52
        },
        background: '#E5E9FB',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Mobile specific adjustments
        '@media (max-width: 600px)': {
          '&::after': {
            content: '"تغییر مشخصات کاربری"',
            fontFamily: "'Vazirmatn', sans-serif",
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '13.72px',
            lineHeight: '21.35px',
            textAlign: 'center',
            color: '#000000',
            width: '125.87px'
          }
        }
      }}
    >
      {/* Desktop text */}
      <Typography
        sx={{
          fontFamily: "'Vazirmatn', sans-serif",
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: {
            xs: '0px', // hide on mobile
            sm: '36px' // show on laptop
          },
          lineHeight: {
            xs: '0px',
            sm: '56px'
          },
          textAlign: 'center',
          color: '#000000',
          display: {
            xs: 'none',
            sm: 'block'
          }
        }}
      >
        تغییر مشخصات کاربری
      </Typography>
    </Box>
    <ChangePasswordTitle/>
    <PreviousPasswordLabel/>
    <PreviousPasswordInput/>
    <NewPasswordLabel/>
    <NewPasswordInput/>
    {/* <Checkpassword/> */}
    <ForgotPasswordLink/>
    <ChangePasswordButton/>
    {/* title of اطلاعات شخصی */}
      <PersonalInfoTitle/>
    {/* change of the نام شخصی */}
      <NameInput/>
      {/* change of the نام خانوادگی  */}
      <LastNameInput/>
      {/* edit the "ایمیل" part. */}
      <EmailInput/>
      {/* edit the شماره تلفن */}
      <PhoneNumberInput/>
      {/* عنوان کاربر */}
      <TitleInput/>
      {/* defining the جنسیت */}
      <GenderDropdown/>
      {/* define the تاریخ تولد part */}
      <BirthdateInput/>
      {/* defining the biography(بیوگرافی ) part  */}
      <BiographyInput/>
    </Box>
  );
};

export default PersonalInfo;