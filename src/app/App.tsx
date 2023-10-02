import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { HomePage } from '@/pages/home';

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path='/avia' element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
