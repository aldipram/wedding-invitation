import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Sambutan from './Components/Sambutan.jsx/Sambutan';
import Mempelai from './Components/Mempelai/Mempelai';
import Tanggal from './Components/Tanggal/Tanggal';
import Lokasi from './Components/Lokasi/Lokasi';
import Gallery from './Components/Gallery/Gallery';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { MusicProvider } from './context/MusicContext';

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sambutan",
    element: <Sambutan />,
  },
  {
    path: "/mempelai",
    element: <Mempelai />,
  },
  {
    path: "/tanggal",
    element: <Tanggal />
  },
  {
    path: "/lokasi",
    element: <Lokasi />
  },
  {
    path: "/gallery",
    element: <Gallery />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MusicProvider>
      <RouterProvider router={router} />
    </MusicProvider>
  </React.StrictMode>,
)
