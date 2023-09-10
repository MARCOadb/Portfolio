import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Colors from '../pages/Colors'

export default function RoutesApp() {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/colors'} element={<Colors />} />
        </Routes>
    )
}