import * as yup from 'yup';

export const loginPageValidationSchema = yup.object({
  email: yup
    .string()
    .required('ایمیل الزامی است')
    .email('ایمیل وارد شده معتبر نیست'),
  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    .matches(/[^A-Za-z0-9]/, 'رمز عبور باید حداقل یک نماد خاص داشته باشد'),
});

export const signupPageValidationSchema = yup.object({
  username: yup
    .string()
    .required('نام کاربری الزامی است')
    .min(4, 'نام کاربری باید حداقل ۴ کاراکتر باشد'),
  email: yup
    .string()
    .required('ایمیل الزامی است')
    .email('ایمیل وارد شده معتبر نیست'),
  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    .matches(/[^A-Za-z0-9]/, 'رمز عبور باید حداقل یک نماد خاص داشته باشد'),
});