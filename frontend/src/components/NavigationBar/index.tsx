import React from 'react';
import {TopNav, Button, Image} from 'bumbag';
import'../index.css';

export const NavigationBar = () => (

    <TopNav className="navigation">
        <TopNav.Section>
            <TopNav.Item href="#">Home</TopNav.Item>
            <TopNav.Item href="#">Jobs</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
            <TopNav.Item>
            <Button className="nav-btn">Login</Button>
            </TopNav.Item>
        </TopNav.Section>
    </TopNav>
);