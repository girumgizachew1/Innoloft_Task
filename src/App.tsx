import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom';
const Main = lazy(() => import('./Pages/Main'));
const Edit = lazy(() => import('./Pages/edit'));
const View = lazy(() => import('./Pages/view'));
import { useGetAppConfigQuery } from './redux/apicalls';
import { useDispatch, useSelector } from 'react-redux';
import { setConfig } from './redux/config';

function App() {
  const appId = import.meta.env.VITE_APP_ID;
  const { data, isFetching, error } = useGetAppConfigQuery(appId)
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setConfig(data));
    }
  }, [data, dispatch]);


  return (
    <div className="w-full  bg-gray-100">
      <Navbar />
      <div className='flex flex-col lg:flex-row  ' >
        <div className=' hidden lg:block  basis-3/12 w-full ' >
          <Sidebar />
        </div>
        <div className='basis-9/12 w-full ' >
          <div></div>
          <Suspense fallback={<div className='mx-auto text-center' >Loading...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/product/edit" element={<Edit />} />
              <Route path="/product" element={<View />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App;
