import React from'react';
import { Columns,Card,Button } from 'bumbag';
import '../index.css'
export function JobsPage(){
    return(
        <div className="jobs-page-main">
            <div className="job-list">Job List</div>
            <Columns className="jobs-page-colomn-wrap">
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card"title="Job1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
                        eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
                        augue sit amet justo.
                        <div className="btn-div">
                            <Button className="cart-btn-save" title="Save">
                                Save
                            </Button>
                            <Button className="cart-btn-apply" title="Apply">
                                Apply
                            </Button>
                        </div>
                    </Card>
                </Columns.Column>
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card"title="Job2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                        <div className="btn-div">
                            <Button className="cart-btn-save" title="Save">
                                Save
                            </Button>
                            <Button className="cart-btn-apply" title="Apply">
                                Apply
                            </Button>
                        </div>
                    </Card>
                </Columns.Column>
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card" title="Job3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                        <div className="btn-div">
                            <Button className="cart-btn-save" title="Save">
                                Save
                            </Button>
                            <Button className="cart-btn-apply" title="Apply">
                                Apply
                            </Button>
                        </div>
                    </Card>
                </Columns.Column>
                <Columns.Column spreadFullHD={12}>
                    <Card className="job-card"title="Job4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue, ultrices
            eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum consectetur lectus
            augue sit amet justo.
                        <div className="btn-div">
                            <Button className="cart-btn-save" title="Save">
                                Save
                            </Button>
                            <Button className="cart-btn-apply" title="Apply">
                                Apply
                            </Button>
                        </div>
                    </Card>
                </Columns.Column>
            </Columns>
        </div>
            
    )
}