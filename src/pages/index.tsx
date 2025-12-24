// css 파일은 프로젝트의 index에만 import 할 수 있다.
// 이 부분과 유니크한 클래스 사용을 위해 아래처럼 css를 모듈화하여 사용한다.
import style from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>index page</h1>
      <h2 className={style.h2}>CSS Module Test</h2>
    </>
  );
}
