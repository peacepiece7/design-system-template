- turborepo에서 yarn은 pnp 모드를 지원하지 않아서 pnpm으로 선택
- lerna는 yarn, terborepo는 pnpm을 사용하는 느낌 같음

# installation

`pnpm dlx create-turbo@latest`

# overview

자세한 내용은 터보 레포에 대해서 정리한 포스팅 [crafting terborepo 요약](222.121.79.140/posts/turborepo/2) 참고!

# pnpm version

```bash
corepack enable
npm install -g pnpm
pnpm -v
```

package.json에 있는 버전을 쓰면 된다.  
`pnpm install`시 설치된 버전에 상관없이 명시된 버전으로 변경되었다.

문서는 어려 방법을 알려주던데, 일단 내가 해보니까 알아서 버전이 변경됨  
문제가 있으면 다시 확인해보자

```json
{ "packageManager": "pnpm@8.15.6" }
```

# node version

```
mkdir ./nvmrc
echo "v20.12.1" > .nvmrc
```

window는 (.bashrc에 alias 넣어두자)

```bash
nvm use $(cat .nvmrc)
```

unix 계열은

```bash
nvm use
```

# with story-book

[turbo repo storybook guide](https://turbo.build/repo/docs/guides/tools/storybook)
[design system git](https://github.com/vercel/turbo/tree/main/examples/design-system)

```bash
mkdir apps/storybook
cd apps/storybook
pnpm dlx storybook@latest init
```

=> react + vite로 생성함

설치하고 [온보딩 에드온](https://github.com/storybookjs/addon-onboarding/blob/main/README.md) 제거

@repo/ui 패키지를 storybook에 추가하기

```bash
pnpm install @repo/ui --filter=storybook
pnpm install @repo/config-eslint --save-dev --filter=storybook
pnpm install @repo/config-ts --save-dev --filter=storybook
```

app/storybook/package.json의 dependincies에 직접 추가해줘도 됨 똑같음

(대신 추가하고 `pnpm install` 꼭 해주기!)

```json
{
  "dependencies": {
    "@repo/ui": "workspace:^",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

# with rollup

[with rollup git](https://github.com/vercel/turbo/tree/main/examples/with-rollup)

# with tailwind

[with tailwind](https://github.com/vercel/turbo/tree/main/examples/with-tailwind)

# typescript alias

패키지를 제공하는 쪽에서 빌드해서 컴포넌트를 제공해야하고

빌드하지 않고 쓸 경우 패키지를 사용하는 쪽에서 alias 설정을 해줘야함

https://github.com/vercel/turbo/discussions/620

# reference

turborepo + storybook + tailwindcss + typescript

https://github.com/arevalolance/design-system-template

https://github.com/anthonyhastings/turborepo-design-system
