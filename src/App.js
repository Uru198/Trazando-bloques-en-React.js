import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Navigation from './Componentes/Navigation/Navigation';
import Main from './Componentes/Main/Main';
import SubContents from './Componentes/SubContents/SubContents';
import Advertisement from './Componentes/Advertisement/Advertisement';
 
                
class App extends React.Component {

    render () {
        return (
            <div className="App">
                <Header />
                <Navigation />
                <Main>
                    <SubContents />
                    <SubContents />
                    <SubContents />
                    <Advertisement />
                </Main>
            </div>
        );
    }
}
                
export default App;


