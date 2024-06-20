'use client';
import justCrudLogo from '@public/just-crud-logo.svg';
import Image from 'next/image';
import S from './page.module.css';
import { onSubmitSignup } from '@_lib/signup';
import { useFormState, useFormStatus } from 'react-dom';
import { useRef } from 'react';
import { useOutsideClick } from '@/app/_hook';

export default function SignupPage() {
  const [state, formAction] = useFormState(onSubmitSignup, { message: null });
  const { pending } = useFormStatus();
  const modalOutRangeRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalOutRangeRef);

  return (
    <div className={S.container} ref={modalOutRangeRef}>
      <div className={S.wrapper}>
        <div className={S.headerWrapper}>
          <Image
            src={justCrudLogo}
            width={40}
            height={40}
            alt="login-header-img"
          ></Image>
          <p>welcome !</p>
        </div>
        <div className={S.formWrapper}>
          <form action={formAction}>
            <div className={S.inputWrapper}>
              <input
                className={S.inputTextBox}
                type="text"
                name="email"
                placeholder="아이디"
                required
              />
              <input
                className={S.inputTextBox}
                type="text"
                name="nickname"
                placeholder="닉네임"
                required
              />
              <input
                className={S.inputTextBox}
                type="password"
                name="password"
                placeholder="비밀번호"
                required
              />
              <input
                className={S.inputTextBox}
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                required
              />
            </div>
            <button className={S.submitBtn} type="submit" disabled={pending}>
              회원가입
            </button>
          </form>
        </div>
        <div className={S.error}>{state?.message}</div>
      </div>
    </div>
  );
}
