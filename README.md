# UI 모듈 제작


### 실행방법

```sh
yarn  # node_modules 설치
yarn storybook  # Storybook 을 통한 실행  http://localhost:9009/
yarn start   # 기본 실행   http://localhost:3000
```

### description

UI 모듈 개발이에 Storybook with React 을 사용하여 UI 를 완성하였습니다.
기본  React App 을 실행 해도 화면에 출력을 하였습니다.

### environment

- React
- Styled-components
- React-Redux
- @Redeux/toolkit
- Storybook with(React -typescript)


###  Structure

```
.storybook - main.js
src
├── components - common
├── lib
│    ├── styles
│    │    ├── media
│    │    ├── palette         
│    │    └── utils (ellipsis)       
│    ├── hooks 
│    │       └── useInput.tsx
│    └── api (cardData.ts)
│
├── modules (redux)
├── static (images)
└── App.tsx
```



