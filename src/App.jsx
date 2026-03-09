
import './App.css'
import {Routes,Route} from 'react-router'
import  {HomePage} from './pages/homepage'
import { CheckOut } from './pages/chaeckout'

function App(){
return(
  <div>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
    </Routes>

  </div>
)
    }

export default App
