import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';

// import { GoogleOAuthProvider } from '@react-oauth/google'
// const GOOGLE_REST_API_KEY = '599604728211-k4rpa2hff5vv52l7d8hf0cqdjh5bf4fa.apps.googleusercontent.com'


function App() {
  return (
    <BrowserRouter>
      {/* <GoogleOAuthProvider clientId={`${GOOGLE_REST_API_KEY}`}> */}

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route path="/edit" element={<Edit />} /> */}
          {/* <Route path="/mypage" element={<Mypage />} /> */}
          {/* <Route path="/write" element={<Write />} /> */}
          {/* <Route path="/feed" element={<Feed/>}/> */}
        </Routes>
      {/* </GoogleOAuthProvider> */}

    </BrowserRouter>
  );
}

export default App;
