'use server';
import { redirect } from 'next/navigation';
import { apiService } from '../_services/ApiService';

const validateFormdata = (formData: FormData) => {
  const email = formData.get('email') as string;
  const nickname = formData.get('nickname') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  let isValid = false;

  if ([email, nickname, password, confirmPassword].some((v) => !v))
    return {
      message: '모든 항목을 입력해주세요.',
      isValid,
    };

  if (email.length < 5 || email.length > 30)
    return {
      message: '아이디는 5자 이상 30자 이하로 입력해주세요.',
      isValid,
    };

  if (password !== confirmPassword)
    return {
      message: '비밀번호가 일치하지 않습니다.',
      isValid,
    };

  return { message: null, isValid: true };
};

export const onSubmitSignup = async (prevState: any, formData: any) => {
  let succ = false;

  const { message, isValid } = validateFormdata(formData);
  if (!isValid) return { message };

  try {
    const res = await apiService.signup(formData);

    console.log(`res.status: ${res.status}`);
    console.log(`res.ok: ${res.ok}`);

    if (res.status === 403) {
      return {
        message: '이미 존재하는 아이디입니다.',
      };
    }
    if (res.ok) succ = true;
  } catch (e) {
    console.error(e);
    return {
      message: '회원가입에 실패했습니다.',
    };
  }

  if (succ) {
    console.log('회원가입 성공');
    redirect('/login');
  }

  return { message: null };
};
