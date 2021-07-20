import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  ${({ theme }) => `
    html, body {
      height: 100%;
    }

    #__next {
      height: 100%;
    }

    body {
      ${theme.typography.regular};
      -webkit-font-smoothing: antialiased;
      color: ${theme.colors.body};
      background-color: ${theme.colors.primary};
    }

    a {
      opacity: 1;
      transition: opacity 0.3s ease-out;
    }

    a:hover {
      opacity: 0.4;
    }
    
    ::selection {
      background: ${theme.colors.bodyInvertedDarker};
    }
    
    ::-moz-selection {
      background: ${theme.colors.bodyInvertedDarker};
    }
  `}
`;

export default GlobalStyle;
