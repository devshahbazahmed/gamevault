import { Search, User } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="flex items-center justify-around gap-5 border-b border-b-blue-950">
      <div id="logo" className="flex justify-center items-center gap-5">
        <img src="./logo.png" alt="gamevault" width={120} height={120} />
      </div>
      <div id="links" className="flex justify-center items-center gap-10">
        <NavLink className="font-bold text-lg" to="/">
          Home
        </NavLink>
        <NavLink className="font-bold text-lg" to="/games">
          Games
        </NavLink>
        <NavLink className="font-bold text-lg" to="/favourite">
          Favourite
        </NavLink>
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="flex justify-center items-center gap-5 bg-blue-950 px-8 py-3 rounded-full">
          <Search size={20} />
          <h3 className="text-md">Search games...</h3>
        </div>
        <div id="user" className="bg-blue-950 rounded-full p-3 cursor-pointer">
          <User size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
