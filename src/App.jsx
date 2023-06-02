import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='my-app'>
     <Outlet />
    </div>
  )
}

export default App
