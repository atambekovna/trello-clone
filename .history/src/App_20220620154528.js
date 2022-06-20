import { SignIn } from './pages/SignInPage/SignIn';
import './App.css';
import { Home } from './pages/Home Page/Home';
import { TodoPage } from './pages/TodoPage/TodoPage';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={SignUp}/>
      <Route exact path='/login/todo' component={TodoPage}/>
    </Switch>
    // <TodoPage/>
  );
}

export default App;
