import './styles/index.scss';

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { HomePage } from '@/pages/home';
import { InfoPage } from '@/pages/info';

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route
                    path='/info'
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <InfoPage />
                        </React.Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
