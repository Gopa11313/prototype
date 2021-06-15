import React, { Component } from 'react'
import Services from '../HomepageComponents/Services'
import { Container } from 'react-bootstrap';
export class Home extends Component {
    render() {
        return (
            <Container>
                <Services />
            </Container>
        )
    }
}
export default Home;