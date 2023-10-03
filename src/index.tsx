import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { setupStore } from './app/providers/redux';

const store = setupStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        ,
    </Provider>,

    document.getElementById('root')
);
