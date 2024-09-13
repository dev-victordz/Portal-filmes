import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ListaDeGenero from './pages/GenreListPage.jsx';
import Home from './pages/Home.jsx';
import DetalhesDoFilme from './pages/MovieDetailPage.jsx';
import Filmes from './pages/MovieListPage.jsx';
import FilmesPorGenero from './pages/MoviesByGenrePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [{
      index: true,
      path: "/home",
      element: <Home />
    },
    {
      path: "/filmes",
      element: <Filmes />
    },
    {
      path: "/filmes/:id",
      element: <DetalhesDoFilme />
    },
    {
      path: "/genre-list",
      element: <ListaDeGenero />
    },
    {
      path: "/genre-list/:id",
      element: <FilmesPorGenero />
    }]

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
