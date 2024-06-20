import S from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface PostItemProps {
  id: number;
  imgUrl: string;
  title: string;
  date: string;
  category: string;
}

export default function PostItem({
  id,
  imgUrl,
  title,
  date,
  category,
}: PostItemProps) {
  return (
    <li data-id={id}>
      <Link className={S.postItem} href={'/'}>
        <div className={S.postItemWrapper}>
          <Image
            src={imgUrl}
            alt="post-item-img"
            width={300}
            height={200}
            style={{
              borderRadius: '12px',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
          ></Image>
          <div className={S.postInfoArea}>
            <p className={S.postCategori}>{category}</p>
            <h3 className={S.postTitle}>{title}</h3>
            <p className={S.postDate}>{date}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
