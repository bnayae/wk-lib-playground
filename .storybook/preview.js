import { Layout } from './Layout';
import {pallette} from './pallette'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const withThemeProvider = (Story, context) => {  
  return (
      <ThemeProvider theme={{ pallette }}>
        <GlobalStyle />
        <Layout>
          <Story {...context} />
        </Layout>
      </ThemeProvider>
  );
};

// addDecorator(withInfo());
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}