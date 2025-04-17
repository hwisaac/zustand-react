import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, RouterProvider } from "react-router";
import router from './routes.tsx';


createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
