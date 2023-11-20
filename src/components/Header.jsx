import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

import "../styles/Header.css";

export default function Header() {
    const [currentPage, setCurrentPage] = useState(useLocation().pathname);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />   
        </nav>
    );
}