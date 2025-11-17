'use client';

import { Grid } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import AuthLogo from "../../../components/AuthLogo";
import AuthFormsHeader from "../../../components/AuthFormsHeader";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import PasswordRecoveryForm from "./PasswordRecoveryForm";
import { authPagesImagesBreakPoints } from "../../../componentBreakpoints";
import { useEffect } from "react";

export const dynamic = 'force-dynamic';


const PasswordRecoveryPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const emailSubmitted = searchParams.get('emailSubmitted');
  const email = searchParams.get('email');

  useEffect(() => {
    if (emailSubmitted !== 'true' || !email) {
      router.replace('/forgot-password');
    }
  }, [emailSubmitted, email]);

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
          title="بازیابی رمز عبور"
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
        <PasswordRecoveryForm />
      </Grid>

      <Grid
        sx={{
          backgroundImage: "url('/passwordRecoveryPageImage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        size={authPagesImagesBreakPoints}
      />
    </Grid>
  );
};

export default PasswordRecoveryPage;
