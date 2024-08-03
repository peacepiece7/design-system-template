export const GIT_COMMIT_TYPES = [
  {
    name: 'feat',
    kor: '신규기능',
    description: '새로운 기능을 추가했을 때 사용합니다. (예 : useMoblie hook추가, 댓글 기능 추가)',
  },
  {
    name: 'chore',
    kor: '기타',
    description: '빌드 업무, 패키지 매니저 설정 등과 같은 기타 작업을 수행했을 때 사용합니다.',
  },
  {
    name: 'style',
    kor: '스타일',
    description: '코드의 의미에 영향을 주지 않는 변경사항 (예: 공백, 세미콜론 수정, 주석 제거)',
  },
  {
    name: 'refactor',
    kor: '최적화',
    description: '코드 리팩토링을 했을 때 사용합니다. (예 : 중복 코드 제거, 변수명 변경)',
  },
  {
    name: 'fix',
    kor: '수정',
    description: '오류, 버그, 오타 등 수정했을 경우 사용합니다.',
  },
  {
    name: 'docs',
    kor: '문서',
    description: '문서를 수정했을 때 사용합니다. (예 : README.md 수정, 주석 추가)',
  },
  {
    name: 'test',
    kor: '테스트',
    description: '테스트 코드를 추가, 수정했을 때 사용합니다.',
  },
  {
    name: 'revert',
    kor: '리버트',
    description: '이전 커밋을 되돌리는 작업을 했을 때 사용합니다.',
  },
  {
    name: 'ci',
    kor: 'CI',
    description: 'CI 설정 및 스크립트를 수정했을 때 사용합니다.',
  },
];
