import React, { Component } from 'react'
import Services from '../HomepageComponents/Services'
import Skills from '../HomepageComponents/Skills'
import { Container } from 'react-bootstrap';
export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Services/>
                </Container>
                <Skills/>
            </React.Fragment>
        )
    }
}
export default Home;