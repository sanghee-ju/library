import Link from "next/link";

export default function Home() {
  return (
    /* 시스템 접속 전 로그인 필요 */
    // 로그인 후, 계정주 역할(role)에 의해, 라우팅될 페이지가 결정됨.
    <>
      {/* 로그인 폼 */}
      <h1>로그인</h1>
      <div>
        <form action="">
          <input type="text" name="user_id" />
          <input type="password" name="user_pw" />
          <input type="submit" value="로그인" />
        </form>
      </div>
      {/* 회원가입 링크 */}
      <Link href="/residents/register">회원이 아니신가요?</Link>
    </>
  );
}
