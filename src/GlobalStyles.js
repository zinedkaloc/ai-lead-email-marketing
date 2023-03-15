import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: ${({ theme }) => theme.spacing.l} 0 ${({ theme }) =>
  theme.spacing.m};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.button};
    font-size: ${({ theme }) => theme.fontSizes.button};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.m}`};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonText};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: all 0.3s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  input, select, textarea {
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-family: ${({ theme }) => theme.fonts.body};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.m};
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryAlpha};
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }

  th {
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: bold;
    text-align: left;
    padding: ${({ theme }) => theme.spacing.xs};
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  }

  td {
    font-size: ${({ theme }) => theme.fontSizes.body};
    padding: ${({ theme }) => theme.spacing.xs};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export default GlobalStyle;
