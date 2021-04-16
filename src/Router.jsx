import { Router, Switch, Route } from "react-router-dom";
// utils
import history from "./utils/history";
// components
import List from "./pages/ToDoList/";
import DetailPage from './pages/TaskDetail';

function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/task/:index" component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
