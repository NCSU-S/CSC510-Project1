import React from 'react';
import {Card, Columns} from 'bumbag';
import '../index.css'
export function LandingPage() {
    return (
        <div className="landing-page-main">
            <div className="title">Find your careers here!</div>
            <p className="subtitle">We are here offering the newest jobs for you.</p>
            <Columns className="landing-page-colomn-wrap">
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card"title="Job1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                    </Card>
                </Columns.Column>
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card"title="Job2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                    </Card>
                </Columns.Column>
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card" title="Job3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                    </Card>
                </Columns.Column>
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card"title="Job4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                    </Card>
                </Columns.Column>
            </Columns>
        </div>
    );
}
