import logo from '../assets/logo.png';
import Navbar from './Navbar';
import './css/header.css';

export default function Header() {
  return (
    <header className='header-wrapper'>
      <img src={logo} />
      <Navbar />
    </header>
  )
};