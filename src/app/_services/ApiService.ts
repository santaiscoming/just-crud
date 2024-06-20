class ApiService {
  private baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  private accessToken = '';

  async signup(formData: FormData) {
    const res = await fetch(`${this.baseUrl}/api/users`, {
      method: 'POST',
      body: formData,
      credentials:
        'include' /* 쿠키를 전달하기 위해 필요 (로그인 한 사람이 또 로그인하는 경우) */,
    });

    return res;
  }

  async fetchAllPosts() {
    const res = await fetch(`${this.baseUrl}/api/allPosts`, {
      method: 'GET',
      credentials: 'include',
    });

    return res.json();
  }
}

export const apiService = new ApiService();
