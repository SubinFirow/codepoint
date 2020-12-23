
import { Link } from "react-router-dom";
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar">
        <div class="sidebar-header">
          <h3>CODEPOINT</h3>
        </div>

        <ul class="list-unstyled sidebar-items">
          <p>Test</p>

          <li >
            <i class="fa fa-home"></i>
            <Link to="/home">HOME</Link>
          </li>
          <li>
          <i class="fa fa-edit"></i>
          <Link to="/form">FORM</Link>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
