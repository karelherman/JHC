import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Main from './Main';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="main" component={Main} title="Main" initial={true} />
                </Stack>
            </Router>
        )
    }
}