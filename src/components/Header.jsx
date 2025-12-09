import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="nav-logo">Qureos</div>

                <ul className="nav-links">
                    <li>
                        <select className="member-select">
                            <option>For Members</option>
                            <option>For Employees</option>
                            <option>For Students</option>
                        </select>
                    </li>
                    <li>Jobs</li>
                </ul>
            </div>
            
            <div className="nav-right">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search by topic"
                        className="search-input"
                    />
                    <SearchIcon className="search-icon" />
                </div>
                <li className="login">Login</li>
                <button className="nav-btn">Become a member</button>
            </div>
        </nav>
    );
}
