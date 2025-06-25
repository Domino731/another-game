import styles from './App.module.scss'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./styles/theme.ts";
import {NavBar} from "./components/NavBar/NavBar.tsx";
import {
    CharacterBodyPerks,
    CharacterCoolPerks,
    CharacterIntelligencePerks, CharacterReflexesPerks, CharacterTechnicalAbilityPerks
} from "../characters/pages/CharacterPerks/CharacterPerks.tsx";
import {Provider} from 'react-redux'
import {store} from "./store/store.ts";
import {Routes, Route} from 'react-router-dom';
import {ROUTES} from "./routes";

const RoutesComponent = () => {
    return <Routes>
        <Route path={ROUTES.characterPerksBody} element={<CharacterBodyPerks/>}/>
        <Route path={ROUTES.characterPerksCool} element={<CharacterCoolPerks/>}/>
        <Route path={ROUTES.characterPerksIntelligence} element={<CharacterIntelligencePerks/>}/>
        <Route path={ROUTES.characterPerksReflexes} element={<CharacterReflexesPerks/>}/>
        <Route path={ROUTES.characterPerksTechnicalAbility} element={<CharacterTechnicalAbilityPerks/>}/>
    </Routes>
}

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={styles.container}>
                    <NavBar/>
                    <RoutesComponent/>
                    {/*<CharacterDetailsPage/>*/}
                    {/*<CharacterAttributes/>*/}
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App
