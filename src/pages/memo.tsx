export default function MemoPage() {
  return (
    <>
      <section>
        <div>
          <h2>공부한 내용</h2>
        </div>
        <div>
          <ol>
            <li>Routing - Routing, Query String, dynamic address</li>
            <li>Routing - prefetching 관리</li>
            {/* a 태그는 서버사이드 렌더링 -> Link로 클라이언트 사이드 렌더링 */}
            {/* Link 컴포넌트 -> 자동 prefetching => nextwork 탭에서 확인 */}
            {/* 명시적으로 prefetching 해제 가능 */}
            {/* programmatic routing은 useEffect를 통해 router.prefetch 설정이 필요함 */}
            <li>API Routes - 잘 사용 안함</li>
            <li>Style - CSS 모듈화</li>
          </ol>
        </div>
      </section>
    </>
  );
}
