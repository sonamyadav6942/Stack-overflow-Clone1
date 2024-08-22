import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
<<<<<<< HEAD
import Companies from './pages/Companies/Companies'
=======


>>>>>>> 1c38d4eee3d4eb47221540dc3566cdf5e9e90f98
const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Auth' element={<Auth />}/>
          <Route path='/AskQuestion' element={<AskQuestion />}/>
          <Route path='/Questions' element={<Questions />}/>
          <Route path='/Questions/:id' element={<DisplayQuestion />}/>
          <Route path='/Tags' element={<Tags />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/Users/:id' element={<UserProfile />} />
<<<<<<< HEAD
          <Route path='/Companies' element={<Companies/>}/>
=======
>>>>>>> 1c38d4eee3d4eb47221540dc3566cdf5e9e90f98
      </Routes>
  )
}
    
    export default AllRoutes
    