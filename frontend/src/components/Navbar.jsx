import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

const Navbar = () => {
  return (
  <div className="navbar">
  <h1 className="navbar-title">Libris</h1>

  <div className="navbar-right">
    <div className="navbar-searchbar">
      <input
        type="text"
        placeholder="Search by category/name"
        className="search-input"
      />
      <FaSearch size={20} className="search-icon" />
    </div>

    <GiHamburgerMenu size={30} className="menu-icon" />
  </div>
</div>

  );
};

export default Navbar;
