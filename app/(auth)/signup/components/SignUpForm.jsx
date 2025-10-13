'use client';
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Divider,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  RemoveRedEyeOutlined,
  VisibilityOffOutlined
} from '@mui/icons-material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    onSubmit: async (values) => {
      const { password, email } = values;
      await signIn('credentials', {
        redirect: false,
        email,
        password
      });
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <TextField
        label="نام کاربری"
        placeholder="نام کاربری خود را وارد کنید"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <TextField
        label="ایمیل"
        placeholder="ایمیل خود را وارد کنید"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <TextField
        type={showPassword ? 'text' : 'password'}
        label="رمز عبور"
        placeholder="رمز عبور خود را وارد کنید"
        name="password"
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

      <Button type="submit" color="primary" variant="contained">
        ثبت نام
      </Button>

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
    </form>
  );
};

export default SignupForm;

