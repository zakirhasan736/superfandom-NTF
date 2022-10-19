import * as NextImage from 'next/image';
import '../styles/globals.css';

const BREAKPOINTS_INT = {
  xl: '1920px',
  'desktop-m': '1680px',
  'laptop-x': '1440px',
  'laptop-m': '1280px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '475px',
  '2xl': '1921px',
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};