
import './App.css';
import Chatpage from './pages/Chatpage';

import Homepage from './pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import UserAuthenticationpage from './pages/User-Authenticationpage';

const router = createBrowserRouter([

  {
    path: "/",
    element:<UserAuthenticationpage></UserAuthenticationpage>,
  },
  {
    path: "/chats",
    element:<Chatpage></Chatpage>,
  },

])


function App() {
  return (
    <RouterProvider router={router}>
    <div className='App'>
   
    </div>
    </RouterProvider>
  );
}

export default App;
