import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер не найден, реакт приложение не вмонтировано!');
}

const root = createRoot(container!);

root.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
);
