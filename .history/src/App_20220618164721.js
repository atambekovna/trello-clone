import { SignIn } from './components/SignInPage/SignIn';
import './App.css';
import { Home } from './components/HomePage/Home';
import { TodoPage } from './components/TodoPage/TodoPage';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    // <Switch>
    //   <Route exact path='/' component={Home}/>
    //   <Route exact path='/login' component={SignUp}/>
    //   <Route exact path='/login/todo' component={TodoPage}/>
    // </Switch>
    <TodoPage/>
  );
}

export default App;
