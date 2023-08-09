import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.story.@(js|jsx|mjs|ts|tsx)', '../src/**/story.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon'
  ],
  features: {
    // @ts-expect-error
    emotionAlias: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
};
export default config;
