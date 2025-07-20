import { NavLink } from "react-router-dom"
export default  function Navbar(){
    const mockUsers = [
        { id: "1", name: "Alice" },
        { id: "2", name: "Bob" },
        { id: "3", name: "Charlie" },
      ];
    return <>
    <nav className="navbar h-14 bg-[#0A0A0A] flex justify-between px-10 items-center">
        <span className="logo font-black text-2xl custom-linear-gradient custom-background-text">Sujan Sah</span>
            <ul className="links flex items-center gap-2.5 text-lg text-white font-medium ">
                <li>
                    <NavLink to="/" className={({isActive})=>(` custom-hover ${isActive?"custom-linear-gradient custom-background-text ":""}`)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=>(` custom-hover ${isActive?"custom-linear-gradient custom-background-text ":""}`)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({isActive})=>(` custom-hover ${isActive?"custom-linear-gradient custom-background-text ":""}`)}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=>(` custom-hover ${isActive?"custom-linear-gradient custom-background-text ":""}`)}>Contact us</NavLink>
                </li>
                {/* <li> details page just for use param and useLocation only 
                    <NavLink to={`/details/123?id=${mockUsers[0].name}`} className={({isActive})=>(` custom-hover ${isActive?"custom-linear-gradient custom-background-text ":""}`)}>Details</NavLink>
                </li>
                 */}
            </ul>
    </nav>
    </>
}