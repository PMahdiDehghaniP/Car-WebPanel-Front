'use client';
import {
  TextField,
  IconButton,
  InputAdornment,
  Divider,
  Typography,
  Box
} from '@mui/material';
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined
} from '@mui/icons-material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { loginPageValidationSchema } from '@/validation/authPagesValidationsSchema';
import { LoadingButton } from '@mui/lab';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginPageValidationSchema,
    onSubmit: async (values) => {
      const { password, email } = values;
      try {
        setLoading(true);
        const resp = await signIn('credentials', {
          redirect: false,
          email,
          password
        });
        if (!resp?.error) {
          router.push('/dashboard');
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
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
      <TextField
        type={showPassword ? 'text' : 'password'}
        label="رمز عبور"
        placeholder="رمز عبور خود را وارد کنید"
        name="password"
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? (
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
      <LoadingButton
        loading={loading}
        type="submit"
        color="primary"
        variant="contained"
      >
        ورود
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
        onClick={() => router.push('/forgot-password')}
      >
        رمز عبور خود را فراموش کردم
      </Typography>
    </Box>
  );
};

export default LoginForm;
