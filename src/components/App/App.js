import React from "react";
import { Route, Switch } from 'react-router-dom';
import AppBar from "../AppBar/AppBar";
import { Container } from './App.styled';
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import NewestPage from "../../pages/NewestPage";
import AskPage from '../../pages/AskPage';
import ShowPage from '../../pages/ShowPage';
import JobsPage from '../../pages/JobsPage';

export default function App() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/newest' >
            <NewestPage/>
          </Route>
          <Route path='/ask' >
            <AskPage/>
          </Route>
          <Route path='/show' >
            <ShowPage/>
          </Route>
          <Route path='/jobs' >
            <JobsPage/>
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        </Container>
    )
}
