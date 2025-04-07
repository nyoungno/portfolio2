/**
 * 부드러운 스크롤 내비게이션 기능
 * 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤합니다.
 */
document.addEventListener("DOMContentLoaded", function () {
  // 모든 내비게이션 링크에 이벤트 리스너 추가
  document.querySelectorAll(".nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      // 기본 동작 방지
      event.preventDefault();

      // 대상 ID 가져오기
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      // 대상 요소가 존재하는 경우 스크롤
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // 네비게이션 높이 고려하여 조정
          behavior: "smooth", // 부드러운 스크롤 효과
        });

        // URL 해시 업데이트
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });

  // 초기 로드 시 URL에 해시가 있을 경우 해당 위치로 스크롤
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 페이지 로드 후 약간의 지연을 두어 스크롤 수행
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }, 100);
    }
  }
});
