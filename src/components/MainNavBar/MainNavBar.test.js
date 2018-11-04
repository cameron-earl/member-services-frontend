import React from 'react';
import ReactDOM from 'react-dom';
import MainNavBar from './MainNavBar';

it('renders with appropriate information in the post-login navbar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainNavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});
