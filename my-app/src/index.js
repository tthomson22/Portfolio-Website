import { render } from 'react-dom';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom'

import App from './App'

const rootElement = document.getElementById('root');
render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App />} />
    </Routes>
  </Router>,
  rootElement
)