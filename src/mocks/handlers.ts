import { http, HttpResponse } from 'msw';

const mockPosts = [
  {
    id: 1,
    title: '집가고싶다',
    date: '2021-10-10',
    category: '카테고리1',
    imgUrl: 'https://doodleipsum.com/300x200/?bg=lightgray&n=4',
  },
  {
    id: 2,
    title: '저도 가고싶어요',
    date: '2021-10-11',
    category: '카테고리2',
    imgUrl: 'https://doodleipsum.com/300x200/flat/?bg=lightgray&n=4',
  },
  {
    id: 3,
    title: 'ma maison',
    date: '2021-10-12',
    category: '카테고리3',
    imgUrl: 'https://doodleipsum.com/300x200/hand-drawn/?bg=lightgray&n=4',
  },

  {
    id: 4,
    title: 'I wanna go home',
    date: '2021-10-13',
    category: '카테고리4',
    imgUrl: 'https://doodleipsum.com/300x200/avatar/?bg=lightgray&n=4',
  },
  {
    id: 5,
    title: '집집집집집집집집집집',
    date: '2021-10-14',
    category: '카테고리5',
    imgUrl: 'https://doodleipsum.com/300x200/avatar-2/?bg=lightgray&n=4',
  },
  {
    id: 6,
    title: '집+집 = 집집',
    date: '2021-10-15',
    category: '카테고리6',
    imgUrl: 'https://doodleipsum.com/300x200/avatar-3/?bg=lightgray&n=4',
  },
  {
    id: 7,
    title: 'ㅇㄴㅁㅇㅁㄴㄹㅁㄴㄹㄴㅁㅁ',
    date: '2021-10-16',
    category: '카테고리7',
    imgUrl: 'https://doodleipsum.com/300x200/avatar-4/?bg=lightgray&n=4',
  },
  {
    id: 8,
    title: 'ㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁ',
    date: '2021-10-17',
    category: '카테고리8',
    imgUrl: 'https://doodleipsum.com/300x200/avatar-5/?bg=lightgray&n=4',
  },
];

export const handlers = [
  http.post('/api/login', () => {
    console.log('mock Api : login sucess !!');

    return HttpResponse.json({ accessToken: '1234', status: 201 });
  }),

  http.post('/api/logout', () => {
    console.log('mock Api : 로그아웃 !!');

    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),

  http.post('/api/users', async () => {
    console.log('mock Api : 회원가입 !!');
    /* 중복된 유저 */
    return HttpResponse.text(JSON.stringify('Already exists user'), {
      status: 403,
    });

    /* 성공 */
    // return HttpResponse.json({
    //   message: '성공',
    //   succ: true,
    // });
  }),

  http.get('/api/allPosts', () => {
    console.log('fetch all post !!');

    return HttpResponse.json(mockPosts);
  }),
];
