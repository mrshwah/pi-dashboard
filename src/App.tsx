import React from 'react';
import {Layout} from 'antd';
import './App.css';

function App() {
    return (
        <div className="App">
          <Layout>
            <Layout.Header>Nick's Raspberry Pi App</Layout.Header>
            <Layout.Content>The Apps Will Go Here</Layout.Content>
            <Layout.Footer>Created By Nick Chouard ©2020</Layout.Footer>
          </Layout>
        </div>
    );
}

export default App;
