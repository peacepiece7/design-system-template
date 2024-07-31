# `@turbo/eslint-config`

Collection of internal eslint configurations.

turbo 설정에서 사용되는 환경변수를 찾는데 도움을 받기 위해 이 패키지를 사용합니다.

```json
{
  "extends": ["turbo"]
}
```

https://turbo.build/repo/docs/reference/eslint-config-turbo

# `settings["import/resolver"].typescript`

모노레포 특성상 eslint가 모듈 경로를 어떻게 해석할지 설정합니다.

# parser, rule, plugin

parser, rule, plugin 세 가지는 각 패키지 내부에서 설정합니다.

**중복되더라도 가능한 공통 설정으로 빼지 않습니다.**
