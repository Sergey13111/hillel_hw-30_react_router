import { NavLink, Outlet } from 'react-router-dom';

const Header  = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home page</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="hotels">Hotels page</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="flights">Flights page</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to="packages">Packages page</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Header ;