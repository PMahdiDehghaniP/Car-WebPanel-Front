import * as yup from 'yup';

const passwordValidationObject = () =>
  yup
    .string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    .matches(/[^A-Za-z0-9]/, 'رمز عبور باید حداقل یک نماد خاص داشته باشد');

const emailValidationObject = () =>
  yup.string().required('ایمیل الزامی است').email('ایمیل وارد شده معتبر نیست');

export const loginPageValidationSchema = yup.object({
  email: emailValidationObject(),
  password: passwordValidationObject()
});

export const signupPageValidationSchema = yup.object({
  email: emailValidationObject(),
  password: passwordValidationObject()
});

export const forgotPasswordPageValidationSchema = yup.object({
  email: emailValidationObject()
});

export const passwordRecoveryPageValidationSchema = yup.object({
  newPassword: passwordValidationObject(),
  repeatNewPassword: yup
    .string()
    .required('تکرار رمز عبور الزامی  است')
    .oneOf([yup.ref('newPassword')], 'رمز عبور و تکرار آن مطابقت ندارند'),
  recoveryCode: yup.string().required('کدبازیابی الزامی است')
});

