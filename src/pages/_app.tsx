import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test"); // react와 동일하게 replace(), back() 사용 가능
  };

  useEffect(() => {
    router.prefetch("/test"); // programmatic routing된 test 페이지의 prefetching 설정
  }, []);

  return (
    <>
      <header>
        {/* a 태그는 서버사이드 렌더링 -> Link로 클라이언트 사이드 렌더링 */}
        {/* Link 컴포넌트 -> 자동 prefetching => nextwork 탭에서 확인 */}
        <Link href={"/"}>index</Link>
        &nbsp;
        {/* 명시적으로 prefetching 해제 가능 */}
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book</Link>
        <div>
          {/* test 페이지는 programmatic routing이라 수동으로 prefetching 설정이 필요함 */}
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
