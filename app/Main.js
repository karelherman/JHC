import React, { Component } from 'react';
import { Content, Card, CardItem, Body, Container} from 'native-base';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import Berita from './pages/Berita';
import Dokter from './pages/Dokter';

export default class Main extends Component {
    render() {
        return (
           <Container>
                <AppHeader />
                <Home />
               <AppFooter />
           </Container>
        )
    }
}

module.export = Main;