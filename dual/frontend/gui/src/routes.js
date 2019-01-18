import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import WrappedNormalLoginForm from './containers/Login';
import WrappedRegistrationForm from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} />
        <Route exact path='/login/' component={WrappedNormalLoginForm} />
        <Route exact path='/signup/' component={WrappedRegistrationForm} />
    </div>
);

export default BaseRouter;