'use client';
import { Grid } from '@mui/material';
import {
  authPagesFormBreakpoints,
  authPagesImagesBreakPoints
} from '../componentBreakpoints';
import AuthFormsHeader from '../components/AuthFormsHeader';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import AuthLogo from '../components/AuthLogo';
import ForgotPasswordForm from './components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <Grid container sx={{ width: '100%', height: '100vh' }}>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="1.5rem"
        size={authPagesFormBreakpoints}
      >
        <AuthLogo />

        <AuthFormsHeader
          title="فراموشی رمز عبور"
          headerIcon={
            <ArrowCircleRightOutlined
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                fontSize: '2rem'
              }}
            />
          }
        />
        <ForgotPasswordForm />
      </Grid>

      <Grid
        sx={{
          backgroundImage: "url('/forgotPasswordImage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        size={authPagesImagesBreakPoints}
      />
    </Grid>
  );
};
export default ForgotPasswordPage;

