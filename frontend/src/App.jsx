import ViewPost from "./screens/ViewPost";
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import NotFound from "./screens/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Create from "./screens/Create";
import Guest from "./screens/Guest";
function Logout() {
  // localStorage.clear();
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  return <Navigate to="/login" />
}
function RegisterAndLogout() {
  // localStorage.clear();
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  return <Signup />
}
function App() {

  return (
    <Router>
      <Routes>
        <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route
        path='/login'
        element={<Login />} />
        <Route
        path='/logout'
        element={<Logout />} />
        <Route
        path='/signup'
        element={<RegisterAndLogout />} />
        <Route
        path='/create'
        element={<Create />} />
        <Route
        path='/view'
        element={<ViewPost />} />
        <Route
        path='/guest'
        element={<Guest />} />
        <Route
        path='*'
        element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
