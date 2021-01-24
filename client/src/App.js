import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'

import Scrollup from './components/ui/ScrollUpButton'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import CryptoScreen from './components/screens/CryptoScreen'
import DeleonScreen from './components/screens/DeleonScreen'
import UltraScreen from './components/screens/UltraScreen'
import NasaScreen from './components/screens/NasaScreen'
import SerialsScreen from './components/screens/SerialsScreen'
import SpaceXScreen from './components/screens/SpaceXScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/cryptowise' component={CryptoScreen} exact />
        <Route path='/deleon' component={DeleonScreen} exact />
        <Route path='/ultra' component={UltraScreen} exact />
        <Route path='/nasa' component={NasaScreen} exact />
        <Route path='/serials' component={SerialsScreen} exact />
        <Route path='/spacex' component={SpaceXScreen} exact />
      </Switch>
      <Scrollup />
      <Footer />
    </Router>
  )
}

export default App
