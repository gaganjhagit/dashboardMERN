import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Component/Header';
import Topmenu from './Topmenu';
import Footer from './Footer';

const Layout = () => {
    return (
       <>
           <Header/>
           <Topmenu/>
           <Outlet/>
           <Footer/>
       </>
       
    );
}

export default Layout