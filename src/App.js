import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import CryptoScreen from './components/screens/CryptoScreen'
import HouseScreen from './components/screens/HouseScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/crypto-zone' component={CryptoScreen} exact />
        <Route path='/find-a-house' component={HouseScreen} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
