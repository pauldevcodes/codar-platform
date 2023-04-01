import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// layout
import Login from './layout/Login'
import Dashboard from './layout/Dashboard';

// routes/pages
import AskAQuestion from './pages/AskAQuestion';
import SeeAllQuestions from './pages/SeeAllQuestions';
import MeetTheTeam from './pages/MeetTheTeam';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "questions/ask",
        element: <AskAQuestion />
      },
      {
        path: "questions/see-all",
        element: <SeeAllQuestions />
      },
      {
        path: "team",
        element: <MeetTheTeam />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
