
import './App.css';
import Chatpage from './pages/Chatpage';

import Homepage from './pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "/",
    element:<Homepage></Homepage>,
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
