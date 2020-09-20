import React from 'react';
import {Button} from 'bumbag';
import {Input} from 'bumbag';
export function LoginPage(){
    return (
        <div className="login-page">
            <div className="title-login">Log In</div>
            <form className="form">
                <div className="form-group">
                    <label className="label">Username</label>
                    <Input className="input" placeholder="UserName" />
                </div>
                <div className="form-group">
                    <label className='label'>Password</label>
                    <Input className="input" placeholder="Password" />
                </div>
                <Button className='login-btn'>Login</Button>
            </form>
        </div>
    )
}