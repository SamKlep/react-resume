import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
      </Switch>
    </Router>
  )
}

export default App
