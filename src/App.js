import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItemDetailsRoute from './components/JobItemDetails'
import LoginForm from './components/LoginForm'
import NotFound from './components/Not Found'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetailsRoute} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
