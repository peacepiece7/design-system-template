- turborepo에서 yarn은 pnp 모드를 지원하지 않아서 pnpm으로 선택
- lerna는 yarn, terborepo는 pnpm을 사용하는 느낌 같음

# installation

`pnpm dlx create-turbo@latest`

# overview

자세한 내용은 터보 레포에 대해서 정리한 포스팅 [crafting terborepo 요약](222.121.79.140/posts/turborepo/2) 참고!

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
