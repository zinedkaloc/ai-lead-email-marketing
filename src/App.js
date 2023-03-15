import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NotFoundPage from "./components/NotFoundPage";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./pages/HomePage";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
