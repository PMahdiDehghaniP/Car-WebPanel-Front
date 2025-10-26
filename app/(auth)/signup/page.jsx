import { Grid } from '@mui/material';
import {
  authPagesFormBreakpoints,
  authPagesImagesBreakPoints
} from '../componentBreakpoints';
import SignupForm from './components/SignUpForm';
import AuthFormsHeader from '../components/AuthFormsHeader';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import AuthLogo from '../components/AuthLogo';

const SignInPage = () => {
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
          title="ثبت نام"
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
        <SignupForm />
      </Grid>

      <Grid
        sx={{
          backgroundImage: "url('/signUpPageImage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        size={authPagesImagesBreakPoints}
      />
    </Grid>
  );
};
export default SignInPage;
