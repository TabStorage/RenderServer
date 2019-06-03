import React, {Fragment} from "react";
import './Header.css';



const Header: React.FC = props => {
    return (
        <Fragment>
            <footer id="header">
                <div className="header-side">
                    ICON
                </div>
                <div className="icon">
                    SearchBAR
                </div>
                <div className="header-side">
                    Mypage
                </div>
            </footer>
        </Fragment>
    );
};

export default Header;