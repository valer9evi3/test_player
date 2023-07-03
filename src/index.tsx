import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';

render(
    <StoreProvider>
        <App />
    </StoreProvider>,

    document.getElementById('root'),
);
