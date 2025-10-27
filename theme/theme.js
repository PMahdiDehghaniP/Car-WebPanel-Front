import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

// Base theme options shared between light and dark
const baseThemeOptions = (isRtl) => {
  return {
    typography: {
      fontFamily: '"Vazirmatn", "Poppins", sans-serif',
      h3: {
        fontSize: '36px',
        fontWeight: 500,
        fontFamily: 'Vazirmatn'
      },
      body1: {
        fontSize: '20px',
        fontWeight: 500,
        fontFamily: 'Vazirmatn'
      },
      body2: {
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'Vazirmatn'
      },
      button: {
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: 'Vazirmatn'
      },
      caption: {
        fontSize: '12px',
        fontWeight: 500,
        fontFamily: 'Vazirmatn'
      }
    },
    shape: {
      borderRadius: 10
    },
    spacing: 4,
    components: {
      MuiTextField: {
        defaultProps: {
          autoComplete: 'off',
          variant: 'filled'
        },
        styleOverrides: {
          root: {
            direction: isRtl ? 'rtl' : 'ltr',
            '& .MuiOutlinedInput-root': {
              borderWidth: '1px',
              borderRadius: '10px',
              height: '54px',
              textAlign: isRtl ? 'right' : 'left'
            },
            '& .MuiInputLabel-root': {
              fontSize: '20px',
              fontWeight: 500,
              position: 'absolute',
              top: '-5%',
              right: isRtl ? '25px' : 'auto',
              left: isRtl ? 'auto' : 0,
              '&.MuiInputLabel-shrink': {
                right: isRtl ? '10px' : 'auto',
                left: isRtl ? 'auto' : '10px'
              },
              '&.Mui-focused': {
                right: isRtl ? '10px' : 'auto',
                left: isRtl ? 'auto' : 0
              }
            },
            '& .MuiFormHelperText-root': {
              fontSize: '14px',
              fontWeight: 500,
              textAlign: isRtl ? 'right' : 'left',
              marginRight: isRtl ? '10px' : '0',
              marginLeft: isRtl ? '0' : '10px'
            },
            '& .MuiInputBase-input': {
              fontSize: '16px',
              fontWeight: 500,
              textAlign: isRtl ? 'right' : 'left'
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '16px',
              fontWeight: 500,
              textAlign: isRtl ? 'right' : 'left'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            textTransform: 'none'
          },
          contained: {
            height: '58px',
            fontSize: '20px',
            fontWeight: 700
          },
          outlined: {
            height: '42px',
            width: '192px',
            fontSize: '12px',
            fontWeight: 500
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.orLabel': {
              fontSize: '20px',
              fontFamily: 'Poppins',
              fontWeight: 500
            },
            '&.formTitle': {
              fontSize: '36px',
              fontWeight: 500,
              fontFamily: 'Vazirmatn'
            },
            '&.bottomLink': {
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'Vazirmatn'
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            width: '410px',
            height: '720px',
            borderRadius: '10px'
          }
        }
      }
    },
    other: {
      sizing: {
        inputContainer: { width: '410px', height: '90px' },
        input: { width: '410px', height: '54px' },
        label: { width: '78px', height: '31px' },
        submitButton: { width: '410px', height: '58px' },
        orBar: { width: '400px', height: '15px' },
        forgotPassBtn: { width: '164px', height: '22px' },
        linkToSignUpBtn: { width: '204px', height: '22px' },
        logo: { width: '168px', height: '168px' },
        form: { width: '410px', height: '720px' },
        backButton: { width: '39px', height: '39px' },
        eyeButton: { width: '44px', height: '44px' },
        googleButton: { width: '192px', height: '42px' },
        googleLogo: { width: '24px', height: '24px' },
        sendCodeAgainLine: { width: '231px', height: '21px' },
        returnToLogin: { width: '135px', height: '21px' }
      },
      margins: {
        inputContainer: {
          inputAndLabel: '5px',
          inputTextXMargin: '10px',
          inputTextYMargin: '14px'
        },
        forms: {
          login: {
            titleXMargin: '168px',
            titleTMargin: '56px',
            titleBMargin: '40px',
            inputContainers: '18px',
            submitButtonYMargin: '42px',
            orBarYMargin: '42px',
            googleBtnBMargin: '32px',
            googleBtnXMargin: '106px',
            forgotPassBtnXMargin: '123px',
            forgotPassBtnBMargin: '36px',
            linkToSignUpBtnXMargin: '103px',
            linkToSignUpBtnBMargin: '18px',
            backBtnTMargin: '65px',
            backBtnBMargin: '48px',
            backBtnLMargin: '131px'
          },
          signUp: {
            titleXMargin: '150px',
            titleTMargin: '51px',
            titleBMargin: '21px',
            inputContainers: '12px',
            submitButtonTMargin: '35px',
            submitButtonBMargin: '34px',
            orBarBMargin: '38px',
            googleBtnBMargin: '25px',
            googleBtnXMargin: '106px',
            linkToLoginBtnXMargin: '116px',
            linkToLoginBtnBMargin: '28px',
            backBtnTMargin: '60px',
            backBtnBMargin: '29px',
            backBtnLMargin: '111px'
          },
          forgetPassword: {
            titleXMargin: '75px',
            titleTMargin: '56px',
            titleBMargin: '52px',
            inputContainerB: '52px',
            orBarTMargin: '124px',
            orBarBMargin: '43px',
            googleBtnBMargin: '32px',
            googleBtnXMargin: '106px',
            linkToSignupBtnXMargin: '111px',
            linkToSignupBtnBMargin: '18px',
            linkToLoginBtnXMargin: '140px',
            linkToLoginBtnBMargin: '36px',
            backBtnTMargin: '64px',
            backBtnBMargin: '61px',
            backBtnLMargin: '39px'
          },
          passwordRecovery: {
            titleXMargin: '95px',
            titleTMargin: '41px',
            titleBMargin: '32px',
            inputContainers: '12px',
            submitButtonTMargin: '41px',
            submitButtonBMargin: '52px',
            orBarBMargin: '32px',
            sendCodeAgainBtnXMargin: '93px',
            sendCodeAgainBtnBMargin: '17px',
            linkToLoginBtnXMargin: '140px',
            linkToLoginBtnBMargin: '36px',
            backBtnTMargin: '49px',
            backBtnBMargin: '41px',
            backBtnLMargin: '56px'
          }
        },
        Pages: {
          signUp: {
            logoMarginT: '46px',
            logoMarginR: '379px',
            logoMarginL: '413px',
            formMarginY: '180px',
            formMarginR: '258px',
            formMarginL: '292px'
          },
          signUpMobile: {
            logoMarginT: '46px',
            logoMarginX: '150px',
            formMarginY: '180px',
            formMarginX: '29px'
          },
          login: {
            logoMarginT: '46px',
            logoMarginR: '379px',
            logoMarginL: '413px',
            formMarginY: '180px',
            formMarginR: '258px',
            formMarginL: '292px'
          },
          loginMobile: {
            logoMarginT: '46px',
            logoMarginX: '150px',
            formMarginY: '180px',
            formMarginX: '29px'
          },
          ForgetPassword: {
            logoMarginT: '46px',
            logoMarginR: '372px',
            logoMarginL: '420px',
            formMarginY: '180px',
            formMarginR: '258px',
            formMarginL: '292px'
          },
          ForgetPasswordMobile: {
            logoMarginT: '46px',
            logoMarginX: '150px',
            formMarginY: '180px',
            formMarginX: '29px'
          },
          PasswordRecovery: {
            logoMarginT: '46px',
            logoMarginR: '372px',
            logoMarginL: '420px',
            formMarginY: '180px',
            formMarginR: '258px',
            formMarginL: '292px'
          },
          PasswordRecoveryMobile: {
            logoMarginT: '46px',
            logoMarginX: '150px',
            formMarginY: '180px',
            formMarginX: '29px'
          }
        }
      }
    }
  };
};

// Light Theme
export const lightTheme = (isRtl) =>
  createTheme(
    deepmerge(baseThemeOptions(isRtl), {
      palette: {
        mode: 'light',
        primary: {
          main: 'rgba(42, 120, 237, 1)',
          contrastText: 'rgba(255, 255, 255, 1)'
        },
        background: {
          default: 'rgba(255, 255, 255, 1)',
          paper: 'rgba(255, 255, 255, 1)'
        },
        text: {
          primary: 'rgba(0, 0, 0, 1)',
          secondary: 'rgba(211, 211, 211, 1)'
        },
        divider: 'rgba(217, 217, 217, 1)',
        action: {
          active: 'rgba(25, 118, 210, 1)'
        },
        carLogoCard: {
          background: '#FFFFFF',
          borderColor: '#E9E9E9'
        },
        carLogoHeader: {
          background: '#F9FBFC',
          allBrandsColor: '#050B20'
        },
        carSlider: {
          sliderButtonBgColor: '#FFFFFF',
          iconColor: '#050B20',
          borderColor: '#E9E9E9'
        }
      }
    })
  );

// Dark Theme
export const darkTheme = (isRtl) =>
  createTheme(
    deepmerge(baseThemeOptions(isRtl), {
      palette: {
        mode: 'dark',
        primary: {
          main: 'rgba(42, 120, 237, 1)',
          contrastText: 'rgba(255, 255, 255, 1)'
        },
        background: {
          default: 'rgba(32, 38, 60, 1)',
          paper: 'rgba(32, 38, 60, 1)'
        },
        text: {
          primary: 'rgba(255, 255, 255, 1)',
          secondary: 'rgba(211, 211, 211, 1)'
        },
        divider: 'rgba(217, 217, 217, 1)',
        action: {
          active: 'rgba(132, 194, 255, 1)'
        },
        carLogoCard: {
          background: '#36426A',
          borderColor: '#333F64'
        },
        carLogoHeader: {
          background: '#29314C',
          allBrandsColor: '#8DA6FF'
        },
        carSlider: {
          sliderButtonBgColor: '#272F4E',
          iconColor: '#FFFFFF',
          borderColor: '#272F4E'
        }
      }
    })
  );
