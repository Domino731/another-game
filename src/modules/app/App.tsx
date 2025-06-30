import styles from "./App.module.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme.ts";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { CharacterPerksPage } from "../characters/pages/CharacterPerks/CharacterPerks.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { CharacterAttributes } from "../characters/pages";
import { MapPage } from "../map/pages/MapPage/MapPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ROUTES.characterPerks} element={<CharacterPerksPage />} />
      <Route
        path={ROUTES.characterAttributes}
        element={<CharacterAttributes />}
      />
      <Route path={ROUTES.map} element={<MapPage />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.container}>
          <BrowserRouter>
            <RoutesComponent />
            {/*<CharacterDetailsPage/>*/}
            {/*<CharacterAttributes/>*/}
            <NavBar />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
};
