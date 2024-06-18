import ReactDOM from 'react-dom/client';
import Routing from './app/routing/Routing';
import './styles/fonts.css';
import './styles/style.css';
import './styles/reset-styles/normolize.css';
import './styles/reset-styles/reset.css';
import './styles/variables.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);