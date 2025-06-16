# 🧑‍💻 프론트엔드 과제 - Next.js

Next.js 기반으로 진행한 과제입니다.  
총 3개의 과제로 구성되어 있습니다.

## 개발 환경

- Node.js: v22.14.0
- 패키지 매니저: yarn

## 프로젝트 실행 방법

```bash
# 패키지 설치
yarn install
# 로컬 개발 서버 실행
yarn dev
```

참고한 것
https://www.meganmagic.com/#skill

## 프로젝트 구조

    src
    ┣ components
    ┃ ┣ commons > 공통 컴포넌트
    ┃ ┗ parts > 페이지 전용 컴포넌트
    ┣ constants > 상수모음
    ┣ hooks > 커스텀 훅 및 커스텀 훅 설명문서
    ┣ layouts > 레이아웃
    ┣ pages
    ┣ styles
    ┣ types
    ┃ ┣ enums
    ┃ ┃ ┗ commons.ts > 공통 enum타입
    ┃ ┣ globals > 타입 보강 관련
    ┃ ┃ ┗ emotion.d.ts
    ┃ ┣ interfaces > src 하위 디렉토리별 interface
    ┃ ┃ ┣ components.ts
    ┃ ┃ ┣ data.ts
    ┃ ┃ ┣ hooks.ts
    ┃ ┃ ┗ pages.ts
    ┃ ┣ types > 공통 type선언
    ┃ ┗ index.ts
    ┗ dummyData.ts > 과제3 필터링용 더미데이터

## 사용한 주요 기술 및 라이브러리

- Next.js
  React 기반의 프레임워크로, 파일 시스템 기반 라우팅과 함께 CSR, SSR, SSG, ISR 등 다양한 렌더링 방식을 유연하게 선택할 수 있는 것이 가장 큰 장점입니다.
  작업 초기에는 과제에 사용하기엔 오버스팩인것같은 느낌에 vite와 고민했지만, 실무 환경과 유사한 구조를 맞추기 위해 최종적으로 Next.js를 선택했습니다.

- Emotion
  CSS-in-JS 스타일링 방식으로, 컴포넌트 파일 내에서 스타일을 함께 정의하고 모듈화할 수 있어 유지보수성과 재사용성 모두 고려해 선택했습니다.
  글로벌 스타일(Global)과 테마 설정(ThemeProvider)을 분리해 프로젝트 전반의 일관된 디자인을 유지할 수 있었고,
  조건부 스타일링 및 동적 스타일 적용도 훨씬 유연하게 다룰 수 있습니다.

- Lodash
  debounce 기능을 활용하여 입력 이벤트 발생 시 불필요한 연산과 렌더링을 방지하고, 성능 최적화를 도모했습니다.
  Lodash는 전 세계적으로 널리 사용되는 안정적인 라이브러리로, 직접 구현하는 것보다 간결하고 오류 가능성이 적기 때문에 채택하게 되었습니다.

## 커스텀 훅 목록 / src > hooks > 각 hook.md 파일 참조

- useFetch : GET API 호출, 로딩/에러/상태코드 관리
- useObjectState : 객체 상태를 부분적으로 업데이트 가능
- useToggle : 불리언 상태를 토글 및 초기화
- useSearches : 객체 배열 필터링 (대소문자 구분 없이 검색)

## 과제 구현 요약

### 과제 1 - 이미지 목록 및 Canvas 이미지 조작

- api는 useFetch라는 커스텀 훅을 통해 요청하며, 로딩/에러/재요청 관리가 가능하도록 분리
- Canvas 활용해 이미지를 회전, 확대, 필터 처리하는 로직을 수학적으로 계산해서 구현
- 로딩 중 / 에러발생시 UI 분리
- 리스트에서 직접 Canvas 조작이 이뤄질 경우 사용자 조작이 너무 복잡해지고, 전체 테이블 UI가 무거워질 수 있어 모달로 띄워 필요한 사용자에게만 조작 기능을 제공하는 구조로 설계
- 단순 GET 요청만 사용하는 과제였기 때문에 라이브러리를 설치하기보단 브라우저 내장 fetch를 사용해 코드 의존도를 줄임
  단, 에러 핸들링, 상태 관리 등의 반복을 줄이기 위해 useFetch로 커스텀 훅화하여 재사용성을 확보

### 과제 2 - 카드 게임 구현

- UI는 step(1~3단계) 기반으로 구성하여 입력 → 확인 → 결과 확인 흐름을 명확하게 구분
- 플레이어 이름 중복 방지, 플레이어 수 제한(2-15명), 카드 수 제한(1-10장), 빈값 입력 방지 => (다음 단계 버튼 비활성화)
- useObjectState 훅을 활용해 한 객체 내에서 여러 상태를 효율적으로 관리

### 과제 3 - 필터링 가능한 테이블

- useSearches 커스텀 훅을 사용해 필터링 로직을 분리하고 재사용성 고려
- useObjectState를 통해 필드별 검색어 상태를 객체 단위로 통합 관리
- 성능 최적화를 위해 lodash의 debounce를 적용해 과도한 필터링 연산 및 리랜더링을 방지
- columns 배열을 기준으로 input, td, highlight 렌더링을 모두 동적으로 구성, 중복 코드를 줄이고 확장성 확보
