import Image from 'next/image';
import S from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={S.main}>
      <nav className={S.headerContainer}>
        <div className={S.headerWrapper}>
          <Link href={'/'}>
            <div className={S.titleArea}>
              <Image
                src="/just-crud-logo.svg"
                alt="Just CRUD"
                width={40}
                height={40}
              />
              <h1 className={S.title}>UserName</h1>
            </div>
          </Link>
          <div className={S.iconArea}>
            <Image src="/user.svg" alt="user-img" width={40} height={40} />
          </div>
        </div>
      </nav>
      <section className={S.postListContainer}>
        <div className={S.postListWrapper}>
          <ul className={S.postList}>
            <li>
              <Link className={S.postItem} href={'/'}>
                <div className={S.postItemWrapper}>
                  <div className={S.postImgArea}>
                    <Image
                      src="https://doodleipsum.com/300x200/?bg=lightgray&n=4"
                      alt="post-item"
                      width={300}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                      style={{
                        borderRadius: '12px',
                      }}
                    ></Image>
                  </div>
                  <div className={S.postInfoArea}>
                    <p className={S.postCategori}>으헤헤</p>
                    <h3 className={S.postTitle}>집에 정말정말 가고싶을때</h3>
                    <p className={S.postDate}>2024.12.20</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
