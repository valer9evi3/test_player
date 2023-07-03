import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <App />
    </StoreProvider>,

    document.getElementById('root'),
);
