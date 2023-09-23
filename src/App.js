import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
// import Login from './components/Login';
import Signup from './components/Signup';
import Signin from './components/Signin';
import UserProfile from './components/UserProfile';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Conversations from './components/Conversations';
import Validation from './components/Validation';
// import Verified from './components/Verified';
import Posts from './components/Posts';
import MyPosts from './components/MyPosts';
import AccountSettings from './components/AccountSettings';
import { Toaster } from 'react-hot-toast';
function App() {

  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Accept'] = 'application/json'
  axios.defaults.withCredentials = true;
  axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    if (token === null) token = sessionStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  })

  return (
    <main >
      <Toaster
        position='bottom-right'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "white",
            color: "black",
          },
          // Default options for specific types
          success: {
            duration: 5000,
            theme: {
              primary: "#B9F9C7",
              secondary: "black",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#FEB8B8",
              color: "black",
            },
          },
        }}
      />
      <div >
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/my-posts' element={<MyPosts />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/2auth' element={<Validation />} />
          {/* <Route path='/verified' element={<Verified />} /> */}
          <Route path='/posts' element={<Posts />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<AccountSettings />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/conversations' element={<Conversations />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/edit-post' element={<EditPost />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
