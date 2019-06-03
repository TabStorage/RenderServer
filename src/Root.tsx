import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import AppTemplate from './components/base/AppTemplate';
import Main from './components/main/main'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppTemplate>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </AppTemplate>
    </BrowserRouter>
  );
}

export default App;
