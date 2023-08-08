
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.story.@(js|jsx|mjs|ts|tsx)', '../src/**/story.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@chakra-ui/storybook-addon',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-swc',
  ],
  framework: {
    options: {},
  },
  features: {
    emotionAlias: false,
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
