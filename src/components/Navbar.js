import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import './css/navbar.css';

const links = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/calculator',
    name: 'Calculator'
  },
  {
    path: '/quote',
    name: 'Quote'
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="nav-wrapper">
        <ul>
          { links.map((link) => {
            return (
              <li key={link.name}>
                <Link to={link.path}>{ link.name }</Link>
              </li>
            )
          }) }
        </ul>
      </nav>
    </>
  )
};