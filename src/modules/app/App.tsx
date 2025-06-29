import styles from './App.module.scss'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./styles/theme.ts";
import {NavBar} from "./components/NavBar/NavBar.tsx";
import {
    CharacterPerksPage
} from "../characters/pages/CharacterPerks/CharacterPerks.tsx";
import {Provider} from 'react-redux'
import {store} from "./store/store.ts";
import {Routes, Route} from 'react-router-dom';
import {ROUTES} from "./routes";
import {CharacterAttributes} from "../characters/pages";

const RoutesComponent = () => {
    return <Routes>
        <Route path={ROUTES.characterPerks} element={<CharacterPerksPage/>}/>
        <Route path={ROUTES.characterAttributes} element={<CharacterAttributes/>}/>
    </Routes>
}

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={styles.container}>

                    <RoutesComponent/>
                    {/*<CharacterDetailsPage/>*/}
                    {/*<CharacterAttributes/>*/}
                    <NavBar/>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App
