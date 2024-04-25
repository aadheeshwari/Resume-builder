import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/Navigator_Footer/Navbar";
import Home from "./components/Home";
import Page404 from "./components/Page404";
// Registration
import SignIn from "./components/Registration/LoginPage/LoginPage";
import SignUp from "./components/Registration/SignUp/SignUp";
import FreeTrail from "./components/Registration/FreeTrailCreate/FreeTrailCreate";
import ForgetPassword from "./components/Registration/ForgotPassword/ForgotPassword";
import VerifyOTP from "./components/User/VerifyOTP";
import Resetpass from "./components/User/Resetpass";
import UserVerify from "./components/User/UserVerification";
import Subscriptionthanks from "./components/User/subscriptionthanks";
// User Side Routes
import StudentGivenMock from "./components/User/StudentGivenMock";
import UserMock from "./components/User/Mock/Main";
// Practice Mode
import PracticeMode from "./components/Practice_Mode/Practice_Mode";
// import Instruction from "./components/Practice_Mode/Instruction";
// import Checking from "./components/Practice_Mode/Access";
// Admin Side Mock
import CreateMock from "./components/Admin/TestandReview/CreateMock";
import Manageusers from "./components/Admin/Manageusers";
import Manageorganization from "./components/Admin/manageorganization";
import ManageGroups from "./components/Admin/Teams/GroupHome";
import UserReview from "./components/Admin/TestandReview/UserReview";
import AdminHome from "./components/Admin/AdminHome";
import MockDetails from "./components/Admin/TestandReview/MockDetails";
import Questions from "./components/Admin/Questions/Question";
import CreateUser from "./components/Registration/CreateUser/CreateUser";
import UserHome from "./components/User/UserHome";
import GroupDetails from "./components/Admin/Teams/GroupDetails";
import PracticeDetails from "./components/Practice_Mode/Practice_Details";
import { ViewEachUser } from "./components/Admin/Teams/ViewEachUser";
import Codereview from "./components/Admin/Teams/codereview";
import Sessiontimeout from "./components/Services/SessionTimeout";
import Protected from "./components/Admin/Protected";
import ErrorElement from "./components/Middleware/ErrorElement";
import PracticeInstruction from "./components/Practice_Mode/PracticeInstruction";
import StudentProfile from "./components/User/StudentProfile";
import CheckLogin from "./components/Middleware/CheckLogin";

// Define your routes

const Kav = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Kav />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <CheckLogin><Home /></CheckLogin> },
      { path: "/login", element:<CheckLogin><SignIn /></CheckLogin>  },
      { path: "/signup", element: <SignUp /> },
      // { path: "/signin/:id/:client_id", element: <CheckLogin><SignIn /></CheckLogin> },
      { path: "/organization", element: <FreeTrail /> },
      { path: "/personal", element: <CreateUser /> },
      { path: "/forget", element: <ForgetPassword /> },
      { path: "/verificationemail", element: <VerifyOTP /> },
      { path: "/userverification", element: <UserVerify /> },
      { path: "/recovery", element: <Resetpass /> },
      { path: "/subscribed", element: <Subscriptionthanks /> },
      {
        path: "/admin",
        element: (
          <Protected isAdmin={true}>
            <AdminHome />
          </Protected>
        ),
      },
      {
        path: "/questions",
        element: (
          <Protected isAdmin={true}>
            <Questions />
          </Protected>
        ),
      },
      {
        path: "/my_organizations",
        element: (
          <Protected isAdmin={true}>
            <Manageorganization />
          </Protected>
        ),
      },
      {
        path: "/mockdetails/:id",
        element: (
          <Protected>
            <MockDetails />
            {/* <MockDetails/> */}
          </Protected>
        ),
      },
      {
        path: "/createmock",
        element: (
          <Protected isAdmin={true}>
            <CreateMock />
          </Protected>
        ),
      },
      {
        path: "/review_mock/:id",
        element: (
          <Protected isAdmin={true}>
            <UserReview />
            {/* <UserReview /> */}
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected isAdmin={false}>
            {/* <UserReview /> */}
            {/* <UserReview /> */}
            <StudentProfile />
          </Protected>
        ),
      },
      {
        path: "/manageusers",
        element: (
          <Protected isAdmin={true}>
            <Manageusers />
          </Protected>
        ),
      },
      {
        path: "/user",
        element: (
          <Protected isAdmin={false}>
            {/* <User /> */}
            <UserHome />
          </Protected>
        ),
      },
      {
        path: "/practicedetails",
        element: (
          <Protected isAdmin={false}>
            {/* <User /> */}
            <PracticeDetails />
          </Protected>
        ),
      },
      {
        path: "/instructions/:qid/:gid/:ind",
        element: (
          <Protected isAdmin={false}>
            {/* <Instruction /> */}
            {/* <NewInstruction /> */}
            <PracticeInstruction />
          </Protected>
        ),
      },
      {
        path: "/access/:qid/:gid/:ind",
        element: (
          <Protected isAdmin={false}>
            {/* <Checking /> */}
            <PracticeInstruction />
          </Protected>
        ),
      },
      {
        path: "/practice/:qid/:gid/:ind",
        element: (
          <Protected isAdmin={false}>
            <PracticeMode />
          </Protected>
        ),
      },
      {
        path: "/given_mock/:id",
        element: (
          <Protected>
            <StudentGivenMock />
          </Protected>
        ),
      },
      {
        path: "/MyMock/:id",
        element: (
          <Protected>
            <UserMock />
          </Protected>
        ),
      },
      {
        path: "/managegroups",
        element: (
          <Protected isAdmin={true}>
            <ManageGroups />
          </Protected>
        ),
      },
      {
        path: "/group/:id",
        element: (
          <Protected isAdmin={true}>
            <GroupDetails />
          </Protected>
        ),
      },
      {
        path: "/assignments",
        element: (
          <Protected isAdmin={true}>
            <ViewEachUser />
          </Protected>
        ),
      },
      {
        path: "/codereview",
        element: (
          <Protected isAdmin={true}>
            <Codereview />
          </Protected>
        ),
      },
      { path: "/sessionexpired", element: <Sessiontimeout /> },
      { path: "*", element: <Page404 /> },
    ],
  },
];

// Create the router using createBrowserRouter
const router = createBrowserRouter(routes);

function App() {
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;