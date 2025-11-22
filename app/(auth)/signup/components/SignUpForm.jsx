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
import { signupPageValidationSchema } from '@/validation/authPagesValidationsSchema';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { toast } from 'sonner';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: signupPageValidationSchema,
    onSubmit: async (values) => {
      const { password, email } = values;
      let respose;
      try {
        setLoading(true);
        respose = await axios.post(process.env.NEXT_PUBLIC_SIGNUP_URL, {
          email,
          password
        });
        console.log(respose);

        if (respose?.status === 201) {
          toast.success(
            'ثبت نام با موفقیت انجام شد لطفا ایمیل خود را تایید کنید و سپس وارد شوید',
            { duration: 5000 }
          );
          router.push('/login');
        } else {
          toast.error(
            `ثبت نام با خطا مواجه شد Error: ${respose?.data?.Message}`,
            { duration: 5000 }
          );
        }
      } catch (error) {
        toast.error(
          `ثبت نام با خطا مواجه شد Error: ${error?.response?.data?.email?.[0]}`,
          { duration: 5000 }
        );
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
      {/* <TextField
        label="نام کاربری"
        placeholder="نام کاربری خود را وارد کنید"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && formik.errors.username}
        helperText={formik.touched.username && formik.errors.username}
      /> */}
      <TextField
        label="ایمیل"
        placeholder="ایمیل خود را وارد کنید"
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
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
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
        ثبت نام
      </LoadingButton>

      <Divider sx={{ fontSize: '20px' }}>یا</Divider>
      <Box alignSelf="center" display="flex" gap="6px">
        <Typography>حساب کاربری دارید ؟</Typography>
        <Typography
          onClick={() => router.push('/login')}
          sx={{ cursor: 'pointer', color: '#1976D2' }}
        >
          وارد شوید
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupForm;
