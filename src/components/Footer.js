
import { UserContext } from '../Context';
import { useContext } from 'react';


function Footer() {


    const userContext = useContext(UserContext);
    return (
        < footer class="container d-flex flex-wrap justify-content-between align-items-center my-5 border-top " >
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                </a>
                <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
                <li class="ms-3  fa-2x">
                    <a class="text-muted" href="#">
                        <i class="fa-brands fa-facebook "></i>
                    </a>
                </li>
                <li class="ms-3  fa-2x">
                    <a class="text-muted " href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li class="ms-3 fa-2x">
                    <a class="text-muted" href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </ footer>
    );
}

export default Footer;