'use server';
import { Grid } from '@mui/material';
import {
  authPagesFormBreakpoints,
  authPagesImagesBreakPoints
} from '../componentBreakpoints';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import AuthFormsHeader from '../components/AuthFormsHeader';
import LoginForm from './components/Loginform';
import AuthLogo from '../components/AuthLogo';

const LoginPage = () => {
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
          title="ورود"
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
        <LoginForm />
      </Grid>

      <Grid
        sx={{
          backgroundImage: "url('/loginPageImage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        size={authPagesImagesBreakPoints}
      />
    </Grid>
  );
};

export default LoginPage;
