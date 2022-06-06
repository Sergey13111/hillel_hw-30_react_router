import { NavLink, Outlet } from "react-router-dom";

const Hotels = () => {
  return (
    <>
      <h3>Hotels page</h3>
      <nav>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/hotels/1">Hotel #1</NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/hotels/2">Hotel #2</NavLink>
      </nav>

      <Outlet />
    </>
  )
};

export default Hotels;