'use client';

import { LoadingButton } from '@mui/lab';
import { Box, Divider, TextField, Typography } from '@mui/material';

import { useFormik } from 'formik';
import { forgotPasswordPageValidationSchema } from '@/validation/authPagesValidationsSchema';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotPasswordPageValidationSchema,
    onSubmit: async (values) => {
      const { email } = values;
      // api call
      const query = new URLSearchParams({
        emailSubmitted: 'true',
        email
      }).toString();

      router.push(`/forgot-password/password-recovery?${query}`);
    }
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
        label="نام کاربری"
        placeholder="نام کاربری خود را وارد کنید"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <LoadingButton
        // loading={loading}
        type="submit"
        color="primary"
        variant="contained"
      >
        ارسال کد بازیابی حساب
      </LoadingButton>
      <Divider sx={{ fontSize: '20px' }}>یا</Divider>
      <Box alignSelf="center" display="flex" gap="6px">
        <Typography>حساب کاربری ندارید ؟</Typography>
        <Typography
          onClick={() => router.push('/signup')}
          sx={{ cursor: 'pointer', color: '#1976D2' }}
        >
          ثبت نام کنید
        </Typography>
      </Box>
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
export default ForgotPasswordForm;
