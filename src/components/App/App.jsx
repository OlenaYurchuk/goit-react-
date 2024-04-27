import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import '../App/App.module.css'

function App() {


  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>

    </div>
  )
}

export default App
