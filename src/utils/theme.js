const mobile = 414;
const tablet = 728;
const largeTablet = 768;
const smallDesktop = 1024;
const desktop = 1280;
const largeDesktop = 1440;
const hugeDesktop = 1920;

export const breakpoints = {
  mobile,
  tablet,
  smallDesktop,
  desktop,
  largeDesktop,
  hugeDesktop
};

export const mediaQueries = {
  smallPhonesOnly: `@media (max-width: ${mobile - 1}px)`,
  fromTablet: `@media (min-width: ${tablet}px)`,
  fromLargeTablet: `@media (min-width: ${largeTablet}px)`,
  fromSmallDesktop: `@media (min-width: ${smallDesktop}px)`,
  fromDesktop: `@media (min-width: ${desktop}px)`,
  fromLargeDesktop: `@media (min-width: ${largeDesktop}px)`,
  fromHugeDesktop: `@media (min-width: ${hugeDesktop}px)`
};

export const colors = {
  body: "#747572",
  bodyShade: "#525252",
  bodyLight: "#afafaf",
  bodyInverted: "#3e3e3c",
  bodyInvertedDarker: "#363634",
  primary: "#fff",
  secondary: "#8e908c",
  secondaryShade: "#4f4f4f",
  error: "#f7901d",
  buttonHover: "#ced0ca",
  headerBorder: "rgba(142, 144, 140, 0.5)"
};

export const fonts = {
  neueHaasGrotesk: "'Neue Haas Grotesk', Helvetica, Arial"
};

const regular = `
  font-family: ${fonts.neueHaasGrotesk};
  font-size: 16px;
  line-height: 1.33;
`;

const navigation = `
  font-family: ${fonts.neueHaasGrotesk};
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: normal;
`;

const heading = `
  font-family: ${fonts.neueHaasGrotesk};
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
`;

const subHeading = `
  font-family: ${fonts.neueHaasGrotesk};
  font-weight: normal;
  font-size: 16px;
  line-height: 1.13;
`;

const title = `
  ${regular}
  text-transform: uppercase;
`;

const caption = `
  ${regular}
  font-size: 10px;
`;

export const typography = {
  regular,
  navigation,
  heading,
  subHeading,
  title,
  caption
};

export const fontWeights = {
  body: 400,
  heading: 600,
  bold: 600,
  extraBold: 700
};

const helpers = {
  //test: (color) => ``
  headerHeight: 41,
  backgroundBlur: `
    background: ${colors.primary};
    /* if backdrop supported */
    @supports (
      (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
    ) {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      background: transparent;
    }
  `
};

const margins = {
  layoutHorizontal: "20px",
  layoutTop: "42px"
};

export const theme = {
  breakpoints,
  mediaQueries,
  colors,
  fonts,
  typography,
  fontWeights,
  helpers,
  margins
};
