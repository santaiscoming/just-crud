'use client';
import { FormEvent, useState } from 'react';
import justCrudLogo from '@public/just-crud-logo.svg';
import Image from 'next/image';
import S from './page.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={S.container}>
      <div role="login-header">
        <div className={S.headerWrapper}>
          <Image
            src={justCrudLogo}
            width={40}
            height={40}
            alt="login-header-img"
          ></Image>
          <p>Login</p>
        </div>
      </div>
      <div className={S.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={S.inputWrapper}>
            <input
              className={S.inputTextBox}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="아이디"
            />
            <input
              className={S.inputTextBox}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </div>
          <button className={S.submitBtn} type="submit">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
}
