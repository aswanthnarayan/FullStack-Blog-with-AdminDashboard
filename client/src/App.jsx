import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/UserComponents/Navbar";
import HomePage from "./pages/UserPages/HomePage";
import WritePage from "./pages/UserPages/WritePage";
import ProfilePage from "./pages/UserPages/ProfilePage";
import SignUpPage from "./pages/UserPages/SignUpPage";
import SignInPage from "./pages/UserPages/SignInPage";
import SinglePostPage from "./pages/UserPages/SinglePostPage";
import AuthorPage from "./pages/UserPages/AuthorPage";
import AdminHomePage from "./pages/AdminPages/AdminHomePage";
import AdminNavbar from "./components/AdminComponents/AdminNavbar";

import PrivateRoute from './utils/PrivateRoute'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./utils/checkUserLoggedIn";
import LoadingSpinner from "./components/UserComponents/LoadingSpinner";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    checkAuth(dispatch); 
  }, [dispatch]);


  if (loading) {
    return <LoadingSpinner/>  
  }

  return (
    <>
      {/* Conditionally render Navbar only on user routes */}
      {location.pathname.startsWith("/admin") ? <AdminNavbar/> : <Navbar />}
      
      <Routes>
        {/* User Routes */}

        <Route 
          path="/" 
          element={<Navigate to="/user/home" />} 
        />

        <Route path="/user/home" element={<HomePage />} />
        <Route path="/user/write" element={<PrivateRoute><WritePage /></PrivateRoute>} />
        <Route path="/user/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/user/signup" element={isAuthenticated ? <Navigate to="/user/home" /> : <SignUpPage />} />
        <Route path="/user/signin" element={isAuthenticated ? <Navigate to="/user/home" /> : <SignInPage />} />
        <Route path="/user/post/:id" element={<SinglePostPage />} />
        <Route path="/user/author/:id" element={<AuthorPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHomePage />} />
      </Routes>
    </>
  );
}

export default App;
