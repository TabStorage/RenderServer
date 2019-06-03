import React, {Fragment} from "react";
import './Header.css';



const Header: React.FC = props => {
    return (
        <Fragment>
            <header id="header">
                <div id="header-icon" className="header-item">
                    ICON
                </div>
                <div id="search" className="header-item">
                    <input placeholder="query"/>
                </div>
                <div className="header-item">
                    Mypage
                </div>
            </header>
        </Fragment>
    );
};

export default Header;