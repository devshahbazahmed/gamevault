import { Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router';

const Navbar = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        if (value) {
          params.set('search', value);
        } else {
          params.delete('search');
        }
        params.set('page', 1);

        return params;
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

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
          <input
            type="text"
            value={value}
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            className="outline-none"
          />
        </div>
        <div id="user" className="bg-blue-950 rounded-full p-3 cursor-pointer">
          <User size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
