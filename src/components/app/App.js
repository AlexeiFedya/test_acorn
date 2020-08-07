import React from 'react';
import {HeaderBithoven} from './../header/header-bithoven';
import {FooterBithoven} from './../footer/footer'
import {Route, Switch} from 'react-router-dom';

import {MainPayForm} from '../pages/main-payform'
import {MainSignUpForm} from '../pages/main-signupform'
import {MainSimplePage} from '../pages/simple-page-main'
import { MainContactUs} from '../pages/main-contactus'
import {MainTbTransactions} from '../pages/main-transactions'

import './App.scss';

function App() {
  return (
    <>
      <HeaderBithoven/>
      <Switch>
      <Route
        path='/'
        component = {MainPayForm} 
        exact />
      <Route
        path='/pay'
        component = {MainPayForm} 
        exact />
      <Route
        path='/signup'
        component= {MainSignUpForm} />  
        <Route
        path='/simplepage'
        component= {MainSimplePage} />  
        <Route
        path='/privacypolicy'
        component= {MainSimplePage} /> 
        <Route
        path='/amlpolicy'
        component= {MainSimplePage} /> 
        <Route
        path='/contactus'
        component= {MainContactUs} /> 
        <Route
        path='/termsofuse'
        component= {MainSimplePage} />
        <Route
        path='/products'
        component= {MainSimplePage} /> 
        <Route
        path='/mywallet'
        component= {MainSimplePage} /> 
        <Route
        path='/transaction'
        component= {MainTbTransactions} />
      </Switch>
      <FooterBithoven/>
    </>
  );
}

export default App;
