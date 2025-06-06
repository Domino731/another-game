import styles from './App.module.scss'
import {CharacterDetailsPage, CharacterAttributes} from "../characters/pages";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./styles/theme.ts";
import {NavBar} from "./components/NavBar/NavBar.tsx";
import {CharacterPerks} from "../characters/pages/CharacterPerks/CharacterPerks.tsx";
import {Provider} from 'react-redux'
import {store} from "./store/store.ts";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={styles.container}>
                    <NavBar/>
                    {/*<CharacterDetailsPage/>*/}
                    {/*<CharacterAttributes/>*/}
                    <CharacterPerks/>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App
