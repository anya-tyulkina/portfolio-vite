import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {StrictMode} from "react";
import {GlobalStyle} from "./style/Global-styled.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>
)
