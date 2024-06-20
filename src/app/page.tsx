'use client';
import s from './page.module.css';
import { useState, useEffect } from 'react';
import { apiService } from './_services/ApiService';
import { Post } from './types';
import { MainHeader, PostItem } from './_component';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.fetchAllPosts();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <main className={s.Container}>
      <MainHeader />
      <section className={s.postListContainer}>
        <div className={s.postListWrapper}>
          <ul className={s.postList}>
            {posts.map((post) => (
              <PostItem key={post.id} {...post} />
            ))}
          </ul>
        </div>
      </section>
      <Link href={'/board'}>
        <span className={s.writeBtn}>write</span>
      </Link>
    </main>
  );
}
