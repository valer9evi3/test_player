import React, { Suspense } from 'react';
import './styles/index.scss';
import { MainPage } from 'pages/MainPage';

function App() {
    return (
        <Suspense fallback="">
            <MainPage />
        </Suspense>
    );
}
export default App;
