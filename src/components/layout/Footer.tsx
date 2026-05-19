export function Footer() {
  return (
    <footer className="safe-bottom border-t border-[--color-line] bg-[--color-surface]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 py-5 text-xs text-[--color-text-secondary] sm:px-4 md:px-6">
        <p>
          This service is for language practice only. It does not provide legal, immigration, medical, or
          mental health advice. In real situations, users should consult qualified professionals or official
          authorities.
        </p>
        <p>
          이 서비스는 영어 표현 훈련을 위한 도구이며, 법률 자문, 이민 자문, 의료 자문 또는 정신건강 치료를 제공하지 않습니다.
          실제 상황에서는 자격 있는 전문가나 공식 기관의 안내를 따라야 합니다.
        </p>
      </div>
    </footer>
  )
}
