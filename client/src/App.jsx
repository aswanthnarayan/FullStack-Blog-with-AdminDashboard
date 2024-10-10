import Navbar from "./components/UserComponents/Navbar"
import HomePage from "./pages/UserPages/HomePage"
import {Routes,Route} from "react-router-dom"
import WritePage from "./pages/UserPages/WritePage"
import ProfilePage from "./pages/UserPages/ProfilePage"
import SignUpPage from "./pages/UserPages/SignUpPage"
import SignInPage from "./pages/UserPages/SignInPage"
import SinglePostPage from "./pages/UserPages/SinglePostPage"
import AuthorPage from "./pages/UserPages/AuthorPage"

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      {/* User Routes */}
      <Route path="/" element={<HomePage/>} />
      <Route path="/write" element={<WritePage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/post/:id" element={<SinglePostPage/>} />
      <Route path="/author/:id" element={<AuthorPage/>} />

      {/* Admin Routes */}
     </Routes>
    </>
  )
}

export default App
