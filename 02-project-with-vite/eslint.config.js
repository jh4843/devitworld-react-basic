import globals from 'globals';
import pluginJs from '@eslint/js';
import parser from '@typescript-eslint/parser'; // TypeScript 파서
import pluginReact from 'eslint-plugin-react'; // React 플러그인

export default [
  pluginReact.configs.flat.recommended,
  pluginJs.configs.recommended,
  {
    // 파일별로 규칙 적용
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser, // TypeScript 파서 사용
      globals: globals.browser, // 브라우저 전역 변수 설정
    },
    settings: {
      react: {
        version: '18.0', // React 18 버전 명시
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 18+에서는 불필요한 규칙 비활성화
    },
  },

];
