import { createRoot } from "react-dom/client";

import {App} from './modules/app/App'

createRoot(document.getElementById("pixi-container")!).render(<App />);
