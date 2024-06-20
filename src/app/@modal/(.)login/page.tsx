'use client';
import { FormEvent, useRef, useState } from 'react';
import justCrudLogo from '../../../../public/just-crud-logo.svg';
import Image from 'next/image';
import s from './page.module.css';
import React from 'react';
import { useOutsideClick } from '@/app/_hook';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const modalOutRangeRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalOutRangeRef);

  return (
    <div className={s.modalContainer} ref={modalOutRangeRef}>
      <div>
        <div className={s.container} role="login-header">
          <div>
            <div className={s.headerWrapper}>
              <Image
                src={justCrudLogo}
                width={40}
                height={40}
                alt="login-header-img"
              ></Image>
              <p>Login</p>
            </div>
          </div>
          <div className={s.formWrapper}>
            <form onSubmit={handleSubmit}>
              <div className={s.inputWrapper}>
                <input
                  className={s.inputTextBox}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="아이디"
                />
                <input
                  className={s.inputTextBox}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호"
                />
              </div>
              <button className={s.submitBtn} type="submit">
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
}
