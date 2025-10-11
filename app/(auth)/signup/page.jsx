import { Grid } from '@mui/material';
import {
  authPagesFormBreakpoints,
  authPagesImagesBreakPoints
} from '../componentBreakpoints';

const SignInPage = () => {
  return (
    <Grid container sx={{ width: '100%', height: '100vh' }}>
      <Grid item sx={{ bgcolor: 'red' }} size={authPagesFormBreakpoints}>
        {
          // form
        }
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

