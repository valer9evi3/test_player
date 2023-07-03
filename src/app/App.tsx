import React, { Suspense } from 'react';
import './styles/index.scss';
import { MainPage } from 'pages/MainPage';

function App() {
    return (
        <div id="app" className="app">
            <Suspense fallback="">
                <MainPage />
            </Suspense>
        </div>
    );
}
export default App;
