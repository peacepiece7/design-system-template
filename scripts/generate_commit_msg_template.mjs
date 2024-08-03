import fs from 'fs';

export const GIT_COMMIT_CONFIGURATION = {
  'header-max-length': 30,
  'body-max-line-length': 80,
  'type-enum': [
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
      name: 'perf',
      kor: '성능',
      description: '성능을 개선했을 때 사용합니다. (예 : 로딩속도 개선, 메모리 사용량 감소)',
    },
    {
      name: 'ci',
      kor: 'CI',
      description: 'CI 설정 및 스크립트를 수정했을 때 사용합니다.',
    },
  ],
  'remember-messages': [],
};

const GIT_COMMIT_TEMPLATE = `
# 다음 형태로 커밋 메시지를 작성해주세요.

############# HEADER(제목) #############
# **<타입>(<적용범위(Optional)>): <설명> -> MAX LENGTH : ${GIT_COMMIT_CONFIGURATION['header-max-length']}**
#
# EXAMPLE: 
# feat(hook): useMobile hook 추가
# feat(등록스포츠클럽): 스포츠클럽 등록 기능 추가
# chore: 주석 제거

############# BODY(본문) #############
# **<본문(Optional)> -> MAX LENGTH : ${GIT_COMMIT_CONFIGURATION['body-max-line-length']}**
#
# EXAMPLE:
# see the issue for details on the typos fixed

############# FOOTER(꼬리말) #############
# **<꼬리말(Optional)>**
#
# EXAMPLE:
# Resolves: #123, #245
# Closes issue by #123
# Pull request: #123

#---------- HEADER TYPE ----------
${GIT_COMMIT_CONFIGURATION['type-enum']
  .map((type) => {
    return `# ${type.name}(${type.kor}) : ${type.description}`;
  })
  .join('\n')}
#-------------------------------
# Remember me ~
#  HEADER TYPE은 영어로 작성해주세요.
#  한글을 지향합니다.
#  제목 끝에 마침표 금지
#  본문는 "무엇을", "왜"에 대한 내용을 작성해주세요.
#  "-"를 사용해서 본문을 구성해주세요.
#-------------------------------
`;

fs.writeFileSync('./scripts/git_commit_template.txt', GIT_COMMIT_TEMPLATE);
