import React from 'react';
import {Link} from 'react-router-dom';
import {TopNav, Button, Image} from 'bumbag';
import'../index.css';

export const NavigationBar = () => (

    <TopNav className="navigation">
        <TopNav.Section className="topnav-section">
            <TopNav.Item className="link-item">
                <Link className = "link" to="/">Home</Link>
            </TopNav.Item>
            <TopNav.Item className="link-item">
                <Link className="link" to="/jobs">Jobs</Link>
            </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
            <TopNav.Item>
                <Button className="nav-btn">
                    <Link className="link"to="/login">Login</Link>
                </Button>
            </TopNav.Item>
        </TopNav.Section>
    </TopNav>
);