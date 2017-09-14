import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import TextBlock from  '../TextBlock/TextBlock';
import EditTextForm from '../EditTextForm/EditTextForm';
import EditText from './Edit/EditText';

const Main = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" />
        <Route path="/edit/text" component={EditText} />
        <Redirect to="/" />
      </Switch>
      <article>
        <h1>Article</h1>
        <TextBlock />
      </article>
    </main>
  );
};

export default Main;
