import Image from 'next/image';
import s from './index.module.css';
import Link from 'next/link';

export default function MainHeader() {
  return (
    <nav className={s.headerContainer}>
      <div className={s.headerWrapper}>
        <Link href={'/'}>
          <div className={s.titleArea}>
            <Image
              src="/just-crud-logo.svg"
              alt="Just CRUD"
              width={40}
              height={40}
            />
            <h1 className={s.title}>JUST-CURD</h1>
          </div>
        </Link>
        <div className={s.authArea}>
          <Link href={'/login'} className={s.login}>
            <p>login</p>
          </Link>
          <Link href={'/signup'} className={s.signup}>
            <p>signup</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
