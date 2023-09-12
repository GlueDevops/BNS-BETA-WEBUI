import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Login from './components/Login';
import Signup from './components/Signup';
// import UserProfile from './components/UserProfile';
// import Profile from './components/Profile';
// import CreatePost from './components/CreatePost';
// import EditPost from './components/EditPost';
// import Conversations from './components/Conversations';
// import Validation from './components/Validation';
// import Verified from './components/Verified';
// import Posts from './components/Posts';
// import MyPosts from './components/MyPosts';
// import AccountSettings from './components/AccountSettings';
function App() {
  return (
    <main >
      <div >
        <Routes> 
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/my-posts' element={<MyPosts />} /> */}
          {/* <Route path='/signin' element={<Login />} /> */}
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/2auth' element={<Validation />} /> */}
          {/* <Route path='/verified' element={<Verified />} /> */}
          {/* <Route path='/posts' element={<Posts />} /> */}
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path='/settings' element={<AccountSettings />} /> */}
          {/* <Route path='/user-profile' element={<UserProfile />} /> */}
          {/* <Route path='/conversations' element={<Conversations />} /> */}
          {/* <Route path='/create-post' element={<CreatePost />} /> */}
          {/* <Route path='/edit-post' element={<EditPost />} /> */}
        </Routes>
      </div>
    </main>
  );
}

export default App;
