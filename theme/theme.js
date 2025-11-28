import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

// Base theme options shared between light and dark
const baseThemeOptions = (isRtl) => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        mobile: 0,
        tablet: 768,
        laptop: 1024,
        desktop: 1200,
        largeDesktop: 1440,
        extraLarge: 1920
      }
    },
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
    },
    sizing: {
      tokenCarDetails: {
        desktop: {
          backAndForthBtn: { width: '60px', heigth: '60px', radius: '45px' },
          addToGarageBtn: {
            width: '188px',
            heigth: '60px',
            fontSize: '20px',
            radius: '15px'
          },
          compareBtn: {
            width: '245px',
            heigth: '82px',
            fontSize: '32px',
            radius: '20px'
          },
          dateBtn: {
            width: '128px',
            heigth: '68px',
            fontSize: '36px',
            radius: '24px'
          },
          submitBtn: {
            width: '155px',
            heigth: '70px',
            fontSize: '32px',
            radius: '10px'
          },
          likeBtn: { width: '40px', heigth: '40px' },
          carName: { fontSize: '64' },
          sectionTitle: { fontSize: '48px' },
          carAroundInfoTitle: { fontSize: '32px' },
          carAroundInfo: { fontSize: '28px' },
          moreInfoTitle: { fontSize: '40px' },
          moreInfo: { fontSize: '36px' },
          priceInfo: { fontSize: '24px' },
          totalCostInfoTitle: { fontSize: '36px' },
          totalCostInfo: { fontSize: '24px' },
          commentName: { fontSize: '24px' },
          commentTitle: { fontSize: '40px' },
          commentText: { fontSize: '24px' }
        },
        mobile: {
          backAndForthBtn: { width: '36px', heigth: '36px', radius: '45px' },
          addToGarageBtn: {
            width: '77px',
            heigth: '22px',
            fontSize: '7',
            radius: '6px'
          },
          compareBtn: {
            width: '85px',
            heigth: '32px',
            fontSize: '16px',
            radius: '5px'
          },
          dateBtn: {
            width: '31px',
            heigth: '19px',
            fontSize: '10px',
            radius: '5px'
          },
          submitBtn: {
            width: '145px',
            heigth: '48px',
            fontSize: '24px',
            radius: '5px'
          },
          likeBtn: { width: '24px', heigth: '24px' },
          carName: { fontSize: '24' },
          sectionTitle: { fontSize: '20px' },
          carAroundInfoTitle: { fontSize: '10px' },
          carAroundInfo: { fontSize: '6px' },
          moreInfoTitle: { fontSize: '14px' },
          moreInfo: { fontSize: '12px' },
          priceInfo: { fontSize: '8px' },
          totalCostInfoTitle: { fontSize: '10px' },
          totalCostInfo: { fontSize: '6px' },
          commentName: { fontSize: '16px' },
          commentTitle: { fontSize: '14px' },
          commentText: { fontSize: '8px' }
        }
      },

      tokenChangeProfile: {
        desktop: {
          changePicBtn: {
            width: '188px',
            height: '48px',
            fontSize: '20px',
            radius: '10px'
          },
          submitBtn: {
            width: '274px',
            height: '68px',
            fontSize: '28px',
            radius: '16px'
          },
          formTitle: { fontSize: '32px' },
          inputLabel: { fontSize: '10px' },
          inputText: { fontSize: '10px' }
        },
        mobile: {
          changePicBtn: {
            width: '120px',
            height: '36px',
            fontSize: '14px',
            radius: '8px'
          },
          submitBtn: {
            width: '104px',
            height: '24px',
            fontSize: '10px',
            radius: '6px'
          },
          formTitle: { fontSize: '12px' },
          inputLabel: { fontSize: '28px' },
          inputText: { fontSize: '28px' }
        }
      },

      tokenEvent: {
        desktop: {
          timer: { fontSize: '24px' },
          myPicsTitle: { fontSize: '38px' },
          deleteBtn: { width: '100px', higth: '40px', radius: '24px' },
          leaderboardTitle: { fontSize: '24px' },
          leaderboardName: { fontSize: '14px' },
          sortText: { fontSize: '20px' },
          allPicsTitle: { fontSize: '32px' },
          postUsername: { fontSize: '20px' },
          likeBtn: { width: '40px', heigth: '40px' },
          reportBtn: { width: '100px', heigth: '40px' },
          postDescription: { fontSize: '20px' },
          positionTitle: { fontSize: '32' },
          positionText: { fontSize: '32' }
        },
        mobile: {
          timer: { fontSize: '7px' },
          myPicsTitle: { fontSize: '16px' },
          tabBtn: { width: 'fit', heigth: '97', fontSize: '12px' },
          deleteBtn: { width: '76px', higth: '30px', radius: '24px' },
          leaderboardTitle: { fontSize: '24px' },
          leaderboardName: { fontSize: '14px' },
          sortText: { fontSize: '12px' },
          allPicsTitle: { fontSize: '16px' },
          postUsername: { fontSize: '12px' },
          likeBtn: { width: '28px', heigth: '28px' },
          reportBtn: { width: '64px', heigth: '28px' },
          postDescription: { fontSize: '12px' },
          positionTitle: { fontSize: '24' },
          positionText: { fontSize: '24' }
        }
      },

      tokenProfile: {
        desktop: {
          changeInfoBtn: {
            width: 'fit',
            height: '44px',
            radius: '10px',
            fontSize: '16px'
          },
          likeBtn: { width: '44px', heigth: '44px' },
          commentBtn: { width: '44px', height: '44px' },
          username: { fontSize: '36px' },
          bioTitle: { fontSize: '20px' },
          bio: { fontSize: '16px' },
          nickname: { fontSize: '16px' },
          number: { fontSize: '40px' },
          numberInfo: { fontSize: '20px' },
          aboutMyCarTitle: { fontSize: '37px' },
          aboutMyCarDescription: { fontSize: '14px' },
          aboutMyCarIconInfoText: { fontSize: '10px' },
          customizationTitle: { fontSize: '18px' },
          customizationItems: { fontSize: '16px' }
        },
        mobile: {
          changeInfoBtn: {
            width: 'fit',
            height: '30px',
            radius: '7px',
            fontSize: '11px'
          },
          likeBtn: { width: '20px', heigth: '20px' },
          commentBtn: { width: '20px', height: '20px' },
          username: { fontSize: '32px' },
          bioTitle: { fontSize: '11px' },
          bio: { fontSize: '9px' },
          nickname: { fontSize: '14px' },
          number: { fontSize: '30px' },
          numberInfo: { fontSize: '15px' },
          aboutMyCarTitle: { fontSize: '18px' },
          aboutMyCarDescription: { fontSize: '7px' },
          aboutMyCarIconInfoText: { fontSize: '5px' },
          customizationTitle: { fontSize: '8px' },
          customizationItems: { fontSize: '7px' }
        }
      },

      tokenHomePage: {
        desktop: {
          header: {
            button: {
              width: '152px',
              height: '47px',
              radius: '46px',
              fontSize: '15px'
            },
            themeBtn: { width: '72px', height: '72px' },
            items: { fontSize: '15px' }
          },
          searchBar: {
            button: {
              width: '215px',
              height: '55px',
              radius: '60px',
              fontSize: '15px'
            },
            xBtn: { width: '56px', height: '56px', radius: '60px' },
            items: { fontSize: '15px' }
          },
          brands: {
            button: { width: '209px', height: '180px', fontSize: '18px' }
          },
          mainCards: {
            button: {
              width: 'fit',
              height: '57px',
              fontSize: '20px',
              radius: '12px'
            },
            backAndNextBtn: { width: '60px', height: '60px', radius: '45px' }
          },
          footer: {
            title: { fontSize: '32px' },
            linkText: { fontSize: '24px' },
            socialLinks: { width: '40px', height: '40px' },
            contactUsItems: { fontSize: '15x' },
            addressAndEmail: { fontSize: '10px' }
          },
          auth: {
            button: {
              width: '410px',
              height: '58px',
              radius: '10px',
              fontSize: '20px'
            }
          }
        },
        mobile: {
          header: {
            button: { width: '56px', height: '56px', radius: '8px' }
          },
          themeBtn: { width: '40px', height: '40px' },
          sideBar: {
            items: { fontSize: '16px' }
          },
          searchBar: {
            button: { width: '56px', height: '56px' },
            xBtn: { width: '46px', height: '46px', radius: '60px' }
          },
          brands: {
            button: { width: '126px', height: '126px', fontSize: '14px' }
          },
          mainCards: {
            button: {
              width: 'fit',
              height: '40px',
              fontSize: '20px',
              radius: '12px'
            },
            backAndNextBtn: { width: '60px', height: '60px', radius: '45px' }
          },
          tab: { fontSize: '16px' },
          footer: {
            title: { fontSize: '16px' },
            linkText: { fontSize: '20px' },
            socialLinks: { width: '40px', height: '40px' },
            contactUsItems: { fontSize: '12px' },
            addressAndEmail: { fontSize: '10px' }
          },
          auth: {
            button: {
              width: '410px',
              height: '58px',
              radius: '10px',
              fontSize: '20px'
            }
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
        },
        carSlider: {
          sliderButtonBgColor: '#FFFFFF',
          iconColor: '#050B20',
          borderColor: '#E9E9E9',
          iconMediBgColor: '#FFFFFF',
          iconMediaColor: '#050B20'
        },
        footer: {
          backgroundColor: '#386BCA'
        },
        achivement: {
          textColor: '#050B20'
        },
        homeFeatures: {
          lightBlue: '#EEF1FB',
          lightPink: '#FCEAFF'
        },
        familyCard: {
          backgroundColor: '#FFD09A',
          swiperBackgroundColor: '#FFFFFF'
        },
        colors: {
          //header
          colorHeaderHomeBG: '#ffffff',
          colorHeaderBG: '#ffffff',
          colorHeaderText: '#000000',
          colorHeaderButton: '#2a78ed',
          colorHeaderButtonText: '#ffffff',
          colorHeaderPhoneSearchBox: '#405ff2',
          colorHeaderPhoneSearchIcon: '#ffffff',

          //footer
          colorFooterBG: '#386bca',
          colorFooterText: '#ffffff',

          //auth pages
          colorNormalBG: '#ffffff',
          colorNormalText: '#000000',
          colorGrayTextBox: '#d9d9d9',
          colorGrayedOutText: '#d9d9d9',
          colorSubmitButton: '#2a78ed',
          colorSubmitButtonText: '#ffffff',
          colorSeperatorLine: '#c9c9c9',
          colorLinkedText: '#2a78ed',
          colorTimerBG: '#e9e9e9',
          colorTimer: '#656565',

          //home pages
          colorMainText: '#000000',
          colorSearchBG: '#ffffff',
          colorSearchText: '#050b20',
          colorSearchButton: '#405ff2',
          colorInsideButtonText: '#ffffff',
          colorHomeBG: '#ffffff',
          colorShowAllBrands: '#050b20',
          colorBrandBG: '#ffffff',
          colorBrandOutlines: '#e9e9e9',
          colorHomeOutlines: '#e9e9e9',
          colorHomeSecondryText: '#050b20',
          colorSelectedSectionText: '#405ff2',
          colorGarageShowcaseBG: '#eef1fb',
          colorGarageShowcaseButton: '#2f6bff',
          colorGarageShowcaseButtonBorder: '#1f43e9',
          colorFestivalShowcaseBG: '#fceaff',
          colorFestivalShowcaseButton: '#ff1d8e',
          colorFestivalShowcaseButtonBorder: '#fc00d2',
          colorCommunityShowcaseWelcomeText: '#ffffff',
          colorCommunityShowcaseBGLeft: '#ffd09a',
          colorCommunityShowcaseBGRight: '#ffffff',
          colorCommunityShowcaseButton: '#2f6bff',
          coloCommunityShowcaseButtonBorder: '#397eff',

          //car cards
          colorCarCardBG: '#ffffff',
          colorCarCardText: '#050b20',
          colorCarCardLink: '#405ff2',
          colorCarCardSeprators: '#e9e9e9',
          colorCarCardSpecial1: '#3d923a',
          colorCarCardSpecial2: '#405ff2',

          //posts cards
          colorPostCardBG: '#ffffff',
          colorPostCardText: '#000000',
          colorPostCardTextSecondry: '#6f7680',
          colorPostCardPaginationBG: '#efefef',
          colorPostCardTextPaginationDots: '#d9d9d9',
          colorPostCardTextPaginationBorder: '#a8a8a8',
          colorPostCardTextPaginationSelectedDot: '#ffffff',

          //error pages
          colorErrorBG: '#d8d4d4',
          colorErrorMainText: '#20263c',
          colorErrorSubtext: '#000000',
          colorErrorButton: '#860101',
          colorErrorButtonText: '#ffffff',

          //profile pages
          colorProfileBG: '#f7f7f8',
          colorComponentBoxes: '#ffffff',
          colorName: '#050b20',
          colorTitle: '#505563',
          colorNormalText: '#000000',
          colorFollowerBox: '#f6f6f6',
          colorFollowerText: '#505563',
          colorFollowerCount: '#242760',
          colorChangeButton: '#7185e7',
          colorAboutMyCar: '#050b20',
          colorCarPhotosBox: '#d9d9d9',
          colorCarIconsBox: '#d9d9d9',
          colorPostsTitle: '#2a78ed',
          colorScrollbarArea: '#e8e8e8',
          colorScrollbarPointer: '#7a7a7a',
          colorPostsLink: '#2a78ed',
          colorAboutMyCarLink: '#2a78ed',
          colorUnderline: '#d9d9d9',
          colorFilledText: '#4e4e4e',
          colorTextBox: '#e8e8e8',
          colorCarIconsBoxChange: '#d9d9d9',
          colorAboutMyCarBG: '#e5e9fb',
          colorCameraButton: '#7185e7',
          colorForgotPasswordLink: '#7185e7',
          colorUserID: '#7185e7',

          //car details page
          colorCarDetailBG: '#ffffff',
          taxItemBg: '#ffffff',
          colorCarDetailIconBG: '#ffffff',
          colorCarDetailPaginationBG: '#f1f1f1',
          colorCarDetailPaginationBorder: '#f1f1f1',
          colorCarDetailPaginationSelectedOutline: '#9e9e9e',
          colorCarDetailPaginationSelected: '#d5d5d5',
          colorCarDetailPaginationDots: '#d9d9d9',
          colorCarDetailPrimaryText: '#000000',
          colorCarDetailCarName: '#242731',
          colorCarDetailCarNameOutline: '#000000',
          colorBlueButton: '#2a78ed',
          colorBlueButtonText: '#ffffff',
          colorGrayButton: '#f5f5f5',
          colorGaryButtonOutline: '#d8d8d8',
          colorGrayButtonText: '#000000',
          colorTitleInfo: '#2f2f2f',
          colorBGRow: '#ffffff',
          colorGrayRow: '#ededed',
          colorPriceBoxOutline: '#e6e6e6',
          colorMostPrice: '#f30000',
          colorLeastPrice: '#138b00',
          colorPriceRange: '#2a78ed',
          colorRangeButtons: '#f5f4f6',
          colorRangeButtonsText: '#5f6165',
          colorChartLine: '#2a78ed',
          colorChartText: '#808191',
          colorEstimatedCostIconsOutline: '#ababab',
          colorCommentsPartOutline: '#cccccc',
          colorCommentsStars: '#fbbc05',
          colorCommentEmptyStar: '#c4c4c4',
          colorCommentRatingBars: '#dbdee1',
          colorCommentsRatedNumber: '#030303',
          colorCommentsRatingNumbers: '#aaaaaa',
          colorCommentsCount: '#868686',
          colorCommentLiked: '#1976d2',
          colorCommentLikeAndDislike: '#757575',
          colorWriteCommentsFill: '#ffffff',
          colorWriteCommentsBoxFill: '#ffffff',
          colorWriteCommentsOutline: '#c4c4c4',
          colorWriteCommentsText: '#7f7f7f',

          //car search page
          colorSearchPageBG: '#ffffff',
          colorSearchSearchBarBG: '#ffffff',
          colorSearchSearchBarSeprators: '#e9e9e9',
          colorCarCardBGSearch: '#f4f4f4',
          colorSearchSelectedSort: '#1976d2',
          colorSearchSortText: '#000000',
          colorSearchSortBG: '#ffffff',
          colorSearchPaginationBG: '#ffffff',
          colorSearchPaginationText: '#212b36',
          colorSearchPaginationSelectedPage: '#1976d2',
          colorSearchPaginationOutlines: '#dfe3e8',
          colorSearchPaginationOffbutton: '#919eab',
          colorSearchPaginationIcons: '#c4cdd5',

          //personal garage
          colorGarageTitle: '#000000',
          colorGrageCollectionBG: '#e9e8e8',
          colorPlusIconBG: '#ffffff',
          colorPlusIcon: '#000000',

          //compare pages
          colorCompareText: '#000000',
          colorCompareHighIcon: '#00c521',
          colorCompareLowIcon: '#ff0000',
          colorCompareEqualIcon: '#ff8800',
          colorHexagonChart: '#101010',
          colorHexagonChartLeft: '#52acff',
          colorHexagonChartLeftOutline: '#52acff',
          colorHexagonChartRight: '#ff0000',
          colorHexagonChartRightOutline: '#c90000'

          //events page
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
          borderColor: '#272F4E',
          iconMediBgColor: '#FFFFFF',
          iconMediaColor: '#050B20'
        },
        familyCard: {
          backgroundColor: '#B66508',
          swiperBackgroundColor: '#848484'
        },
        footer: {
          backgroundColor: '#003597'
        },
        achivement: {
          textColor: '#000000'
        },
        homeFeatures: {
          lightBlue: '#546189',
          lightPink: '#814E88'
        },
        colors: {
          //header
          colorHeaderHomeBG: '#000000',
          colorHeaderBG: '#333d5f',
          colorHeaderText: '#ffffff',
          colorHeaderButton: '#ffffff',
          colorHeaderButtonText: '#050b20',
          colorHeaderPhoneSearchBox: '#405ff2',
          colorHeaderPhoneSearchIcon: '#333d5f',

          //footer
          colorFooterBG: '#003597',
          colorFooterText: '#ffffff',

          //auth pages
          colorNormalBG: '#20263c',
          colorNormalText: '#ffffff',
          colorGrayTextBox: '#d9d9d9',
          colorGrayedOutText: '#d9d9d9',
          colorSubmitButton: '#2a78ed',
          colorSubmitButtonText: '#ffffff',
          colorSeperatorLine: '#c9c9c9',
          colorLinkedText: '#84c2ff',
          colorTimerBG: '#e9e9e9',
          colorTimer: '#656565',

          //home pages
          colorMainText: '#ffffff',
          colorSearchBG: '#ffffff',
          colorSearchText: '#050b20',
          colorSearchButton: '#405ff2',
          colorInsideButtonText: '#ffffff',
          colorHomeBG: '#20263c',
          colorShowAllBrands: '#8da6ff',
          colorBrandBG: '#36426a',
          colorBrandOutlines: '#22283d',
          colorHomeOutlines: '#e9e9e9',
          colorHomeSecondryText: '#ffffff',
          colorSelectedSectionText: '#405ff2',
          colorGarageShowcaseBG: '#546189',
          colorGarageShowcaseButton: '#2f6bff',
          colorGarageShowcaseButtonBorder: '#1f43e9',
          colorFestivalShowcaseBG: '#814e88',
          colorFestivalShowcaseButton: '#ff1d8e',
          colorFestivalShowcaseButtonBorder: '#fc00d2',
          colorCommunityShowcaseWelcomeText: '#ffffff',
          colorCommunityShowcaseBGLeft: '#b66508',
          colorCommunityShowcaseBGRight: '#824500',
          colorCommunityShowcaseButton: '#2f6bff',
          coloCommunityShowcaseButtonBorder: '#397eff',

          //car cards
          colorCarCardBG: '#272f4e',
          colorCarCardText: '#ffffff',
          colorCarCardLink: '#7185e7',
          colorCarCardSeprators: '#e9e9e9',
          colorCarCardSpecial1: '#3d923a',
          colorCarCardSpecial2: '#7185e7',

          //posts cards
          colorPostCardBG: '#20263c',
          colorPostCardText: '#ffffff',
          colorPostCardTextSecondry: '#6f7680',
          colorPostCardPaginationBG: '#434343',
          colorPostCardTextPaginationDots: '#d9d9d9',
          colorPostCardTextPaginationBorder: '#454545',
          colorPostCardTextPaginationSelectedDot: '#ffffff',

          //error pages
          colorErrorBG: '#566084',
          colorErrorMainText: '#ffffff',
          colorErrorSubtext: '#ffffff',
          colorErrorButton: '#860101',
          colorErrorButtonText: '#ffffff',

          //profile pages
          colorProfileBG: '#20263c',
          colorComponentBoxes: '#333d5f',
          colorName: '#ffffff',
          colorTitle: '#d9d9d9',
          colorNormalText: '#ffffff',
          colorFollowerBox: '#5869a2',
          colorFollowerText: '#d9d9d9',
          colorFollowerCount: '#ffffff',
          colorChangeButton: '#7185e7',
          colorAboutMyCar: '#ffffff',
          colorCarPhotosBox: '#d9d9d9',
          colorCarIconsBox: '#d9d9d9',
          colorPostsTitle: '#ffffff',
          colorScrollbarArea: '#8f8f8f',
          colorScrollbarPointer: '#323232',
          colorPostsLink: '#c6c2ff',
          colorAboutMyCarLink: '#c6c2ff',
          colorUnderline: '#d9d9d9',
          colorFilledText: '#cacaca',
          colorTextBox: '#5e647b',
          colorCarIconsBoxChange: '#5e647b',
          colorAboutMyCarBG: '#38447a',
          colorCameraButton: '#7185e7',
          colorForgotPasswordLink: '#7185e7',
          colorUserID: '#7185e7',

          //car details page
          colorCarDetailBG: '#20263c',
          taxItemBg: '#363F5F',
          colorCarDetailIconBG: '#20263c',
          colorCarDetailPaginationBG: '#20263c',
          colorCarDetailPaginationBorder: '#20263c',
          colorCarDetailPaginationSelectedOutline: '#ffffff',
          colorCarDetailPaginationSelected: '#afafaf',
          colorCarDetailPaginationDots: '#d9d9d9',
          colorCarDetailPrimaryText: '#ffffff',
          colorCarDetailCarName: '#ffffff',
          colorCarDetailCarNameOutline: '#9c9c9c',
          colorBlueButton: '#2a78ed',
          colorBlueButtonText: '#ffffff',
          colorGrayButton: '#424c72',
          colorGaryButtonOutline: '#424c72',
          colorGrayButtonText: '#ffffff',
          colorTitleInfo: '#d2d4d8',
          colorBGRow: '#20263c',
          colorGrayRow: '#363f5f',
          colorPriceBoxOutline: '#363f5f',
          colorMostPrice: '#f30000',
          colorLeastPrice: '#138b00',
          colorPriceRange: '#2a78ed',
          colorRangeButtons: '#363f5f',
          colorRangeButtonsText: '#ffffff',
          colorChartLine: '#2a78ed',
          colorChartText: '#808191',
          colorEstimatedCostIconsOutline: '#ababab',
          colorCommentsPartOutline: '#cccccc',
          colorCommentsStars: '#fbbc05',
          colorCommentEmptyStar: '#ffffff',
          colorCommentRatingBars: '#4e5a85',
          colorCommentsRatedNumber: '#ffffff',
          colorCommentsRatingNumbers: '#aaaaaa',
          colorCommentsCount: '#b7b7b7',
          colorCommentLiked: '#2894ff',
          colorCommentLikeAndDislike: '#a3a7b6',
          colorWriteCommentsFill: '#363f5f',
          colorWriteCommentsBoxFill: '#424c72',
          colorWriteCommentsOutline: '#c4c4c4',
          colorWriteCommentsText: '#a1a6b9',

          //car search page
          colorSearchPageBG: '#20263c',
          colorSearchSearchBarBG: '#e3e3e3',
          colorSearchSearchBarSeprators: '#adadad',
          colorCarCardBGSearch: '#272f4e',
          colorSearchSelectedSort: '#1976d2',
          colorSearchSortText: '#000000',
          colorSearchSortBG: '#e3e3e3',
          colorSearchPaginationBG: '#38426a',
          colorSearchPaginationText: '#c4cdd5',
          colorSearchPaginationSelectedPage: '#7185e7',
          colorSearchPaginationOutlines: '#626a89',
          colorSearchPaginationOffbutton: '#919eab',
          colorSearchPaginationIcons: '#c4cdd5',

          //personal garage
          colorGarageTitle: '#ffffff',
          colorGrageCollectionBG: '#2c3350',
          colorPlusIconBG: '#272f4e',
          colorPlusIcon: '#ffffff',

          //compare pages
          colorCompareText: '#ffffff',
          colorCompareHighIcon: '#00c521',
          colorCompareLowIcon: '#ff0000',
          colorCompareEqualIcon: '#ff8800',
          colorHexagonChart: '#f1f1f3',
          colorHexagonChartLeft: '#52acff',
          colorHexagonChartLeftOutline: '#52acff',
          colorHexagonChartRight: '#ff0000',
          colorHexagonChartRightOutline: '#c90000'

          //events page
        }
      }
    })
  );
