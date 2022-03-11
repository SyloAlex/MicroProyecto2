import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from '../redux/store'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import { Movies } from '../pages/Movies/Movies'
import { Layout } from '../containers/Layout/Layout'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route path={'/'} element={<Login />} />
                        <Route path={'/register'} element={<Register />} />
                        <Route path={'/movies'} element={<Movies />} />
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    )
}

export default App