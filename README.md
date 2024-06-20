# MSW

## 설정

`npx msw init public/ --save` 명령어를 통해 msw 설정 파일을 생성합니다.

### .env와 .env.local의 차이

.env는 배포한 뒤에 실행되는놈이다 + 개발도

그러나 .env.local은 개발환경에서만 실행된다.
`NEXT_PUBLIC_API_MOCKING=enabled`

- 추가로 `NEXT_PUBLIC`이 붙으면 browser에서 접근해도 되는 변수인가 아닌변수인가 구별할 수 있다.
  - 즉, 유저에게 노출되어도 되는 변수인가 아닌가 구별할 수 있다.

## 실행 flow

env 파일을 통해 browser 즉, setupWorker가 api통신을 가로채로 handler.js안의 handler들이 실행됨

### mockServiceWorker.js

api 요청을 보내면 worker가 요청을 가로채서 응답을 제공한다.

말그대로 service(통신) mock(가짜) worker(작업자)이다.

### cookie

HTTP 통신을 할때 response로 다음과 같은 cookie 응답이 온다

- login

  - `Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/`

- logout

  - `Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0`

# Server Action

Server Action을 사용하면 useState를 사용하지 않고도 Form을 처리할 수 있다.

## fetch의 credentials(자격증)

```ts
fetch('http://localhost:3000/api/login', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
});
```

위와같이 `credentials`를 `include`로 설정하면 **자격증명** 즉, 인증과 관련된 **쿠키** 및 **인증헤더**를 req에 담아보낼 수 있다.

# Tip

- `redirect()`는 `try-catch`안에 있으면 안된다
