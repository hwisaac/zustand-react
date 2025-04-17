import { createBrowserRouter } from 'react-router';
import App from './App';
import TicTacToe from './pages/TicTacToe';
import DevtoolsPage from './pages/DevtoolsPage';


function Root() {
    return <h1>Hello world</h1>;
  }

const router =createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        { index: true, Component: TicTacToe },
        {
          path:'devtools',
          Component: DevtoolsPage,
        }
      ],
    },
  ]);

  export default router;