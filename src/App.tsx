import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateLayout from './layouts/PrivateLayout'
import PublicLayout from './layouts/PublicLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PrivatePage from './pages/PrivatePage'
import { AuthProvider } from './context/AuthContext'
import Page404 from './pages/Page404'
import { ToastContainer } from 'react-toastify'
const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <QueryClientProvider client={queryClient}>

              <Routes>
                <Route element={<PublicLayout />}>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                </Route>

                <Route element={<PrivateLayout />}>
                  <Route path='/private' element={<PrivatePage />}></Route>
                </Route>

                <Route path="*" element={<Page404 />}></Route>
              </Routes>
              <ToastContainer />
          </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
