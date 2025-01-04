import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import Home from "../pages/Home";
import One from "../pages/01";
import Two from "../pages/02";
import Three from "../pages/03";
import Practice2 from "../pages/03_pratice";
import Four from "../pages/04";
import Five from "../pages/05";
import Six from "../pages/06";
import Seven from "../pages/07";
import Eight from "../pages/08";
import Nine from "../pages/09";
import Ten from "../pages/10";
import Eleven from "../pages/11";
import Twelve from "../pages/12";

export default function Router(){
  return(
    <BrowserRouter>
      <nav style={{border:'1px solid red'}}>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/' style={{padding:'0 15px',backgroundColor:'hotpink'}}>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/One' style={{padding:'0 15px',backgroundColor:'orange'}}>
          One
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Two' style={{padding:'0 15px',backgroundColor:'yellow'}}>
          Two
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Three' style={{padding:'0 15px',backgroundColor:'lightgreen'}}>
          Three
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Four' style={{padding:'0 15px',backgroundColor:'skyblue'}}>
          Four
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Five' style={{padding:'0 15px',backgroundColor:'royalblue'}}>
          Five
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Six' style={{padding:'0 15px',backgroundColor:'violet'}}>
          Six
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Seven' style={{padding:'0 15px',backgroundColor:'fuchsia'}}>
          Seven
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Eight' style={{padding:'0 15px',backgroundColor:'silver'}}>
          Eight
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Nine' style={{padding:'0 15px',backgroundColor:'darkgray'}}>
          Nine
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Ten' style={{padding:'0 15px',backgroundColor:'dimgray'}}>
          Ten
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Eleven' style={{padding:'0 15px',backgroundColor:'dimgray'}}>
          Eleven
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Twelve' style={{padding:'0 15px',backgroundColor:'dimgray'}}>
          Twelve
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/One' element={<One />} />
        <Route path='/Two' element={<Two />} />
        <Route path='/Three' element={<Three />} />
        <Route path='/Three/Practice2' element={<Practice2 />} />
        <Route path='/Four' element={<Four />} /> 
        <Route path='/Five' element={<Five />} />
        <Route path='/Six' element={<Six />} />
        <Route path='/Seven' element={<Seven />} />
        <Route path='/Eight' element={<Eight />} />
        <Route path='/Nine' element={<Nine />} />
        <Route path='/Ten' element={<Ten />} />
        <Route path='/Eleven' element={<Eleven />} />
        <Route path='/Twelve' element={<Twelve />} />
      </Routes>
    </BrowserRouter>
  )
}

