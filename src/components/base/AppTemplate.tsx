import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';

const AppTemplate: React.FC = props => {

    return (
        <Fragment>
            <Header/>
                {props.children}
            <Footer/>
        </Fragment>
    );
}

export default AppTemplate;