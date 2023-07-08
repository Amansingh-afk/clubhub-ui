import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import "./App.css";

import useAuth from "./utils/UseAuth";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import SuperAdminDashboard from "./views/SuperAdminDashboard";
import Login from "./components/Auth/Login";
import SignIn from "./components/Auth/SignIn";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Profile from "./components/Profile/Profile";
import Club from "./components/Club/Club";
import ClubDetail from "./components/Club/ClubDetail";
import ClubForm from "./components/Club/ClubForm";
import EventDetail from "./components/Event/EventDetail";
import Event from "./components/Event/Event";
import EventForm from "./components/Event/EventForm";
import Layout from "./components/Layout/Layout";
import Password from "./components/Profile/Password";
import ResetPassword from "./components/Auth/ResetPassword";
import TeamForm from "./components/Event/TeamForm";
import NotFound from "./components/Common/NotFound";

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <Navigate
      to={
        isAuthenticated && user.role === "admin"
          ? "/admin"
          : user.role === "super_admin"
          ? "/super-admin"
          : "/student"
      }
      replace
    />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/" element={ <Layout> <Outlet /> </Layout> } >
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<Password />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/event/new" element={<EventForm isEdit={false}/>} />
          <Route path="/event/update/:id" element={<EventForm isEdit={true}/>} />
          <Route path="/event/team" element={<TeamForm />} />
          <Route path="/club" element={<Club />} />
          <Route path="/club/:id" element={<ClubDetail />} />
          <Route path="/club/update/:id" element={<ClubForm isEdit={true} />} />
          <Route path="/club/new" element={<ClubForm isEdit={false} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
