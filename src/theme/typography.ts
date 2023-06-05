declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    label: true;
  }
}

const typography = () => ({
  fontSize: 12,
  fontFamily: "Noto Sans",
  h1: {},
  h2: {},
  h4: {},
  button: {},
  overline: {},
  h5: {},
  h6: {},
  caption: {},
  h3: {},
  subtitle1: {},
  subtitle2: {},
  body1: {},
  body2: {},
  label: {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "500",
    color: "black",
    lineHeight: 1.2,
  },
});

export default typography;
