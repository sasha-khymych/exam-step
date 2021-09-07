import { Link } from '@material-ui/core';
import React from 'react';
import './navlink.css';

function Navlink() {
    return(
        <nav className="navlink">
            <div className="navlink-outer">
                <div className="navlink-inner">
                    <Link>
                        Men
                    </Link>
                    <Link>
                        Woman
                    </Link>
                    <Link>
                        Accessories
                    </Link>
                    <Link>
                        Sale
                    </Link>
                </div>

            </div>


        </nav>
    )
}

export default Navlink;