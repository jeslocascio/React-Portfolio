import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="mb-0">
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                </p>
                <p className="mb-0"> © 2023 by Jesse LoCascio</p>
            </div>
        </footer>
    );
}