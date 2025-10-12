'use client';
import {
  Button,
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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
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
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px'
          }
        }}
        label="نام کاربری"
        placeholder="نام کاربری خود را وارد کنید"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <TextField
        type={showPassword ? 'text' : 'password'}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px'
          }
        }}
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

      <Button
        type="submit"
        sx={{
          height: '58px',
          fontSize: '20px',
          fontWeight: '700',
          borderRadius: '10px'
        }}
        color="primary"
        variant="contained"
      >
        ورود
      </Button>

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
    </form>
  );
};

export default LoginForm;

