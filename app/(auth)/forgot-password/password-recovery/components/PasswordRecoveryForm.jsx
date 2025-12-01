import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined
} from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import TimerButton from './TimerButton';
import { useRouter } from 'next/navigation';
import { passwordRecoveryPageValidationSchema } from '@/validation/authPagesValidationsSchema';

const PasswordRecoveryForm = ({ email }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      repeatNewPassword: '',
      recoveryCode: ''
    },
    validationSchema: passwordRecoveryPageValidationSchema,
    onSubmit: async (values) => {}
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: { xs: '80%', md: '50%' },
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <TextField
        type={showNewPassword ? 'text' : 'password'}
        label=" رمز عبور جدید"
        placeholder="رمز عبور جدید خود را وارد کنید"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.newPassword && formik.errors.newPassword}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  edge="end"
                >
                  {showNewPassword ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <RemoveRedEyeOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      />
      <TextField
        type={showRepeatNewPassword ? 'text' : 'password'}
        label=" تکرار رمز عبور جدید"
        placeholder="رمز عبور جدید خود دوباره را وارد کنید"
        name="repeatNewPassword"
        value={formik.values.repeatNewPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.repeatNewPassword && formik.errors.repeatNewPassword
        }
        helperText={
          formik.touched.repeatNewPassword && formik.errors.repeatNewPassword
        }
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => setShowRepeatNewPassword((prev) => !prev)}
                  edge="end"
                >
                  {showRepeatNewPassword ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <RemoveRedEyeOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      />
      <TextField
        label="کد بازیابی حساب"
        placeholder="کد بازیابی ارسال شده را وارد کنید"
        name="recoveryCode"
        value={formik.values.recoveryCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.recoveryCode && formik.errors.recoveryCode}
        helperText={formik.touched.recoveryCode && formik.errors.recoveryCode}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                sx={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
              >
                <TimerButton email={email} />
              </InputAdornment>
            )
          }
        }}
      />
      <LoadingButton
        // loading={loading}
        type="submit"
        color="primary"
        variant="contained"
      >
        بازیابی حساب کاربری
      </LoadingButton>
      <Divider sx={{ fontSize: '20px' }}>یا</Divider>
      <Typography
        sx={{
          color: '#1976D2',
          cursor: 'pointer',
          textAlign: 'center',
          alignSelf: 'center'
        }}
        onClick={() => router.push('/login')}
      >
        بازگشت به صفحه ورود
      </Typography>
    </Box>
  );
};
export default PasswordRecoveryForm;
