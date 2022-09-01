import React from 'react';
import ContentPage from '../components/ContentPage/ContentPage';
import SideBar from '../components/SideBar/SideBar';
import './Demo.scss'

const Demo = () => {
    return (
        <div className='course__container'>
            <SideBar/>
            <ContentPage/>
        </div>
    );
};

export default Demo;