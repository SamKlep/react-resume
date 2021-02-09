import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/ui/Header'

import Scrollup from './components/ui/ScrollUpButton'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import CryptoScreen from './components/screens/CryptoScreen'
import DeleonScreen from './components/screens/DeleonScreen'
import HeroScreen from './components/screens/HeroScreen'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/cryptowise' component={CryptoScreen} />
        <Route path='/deleon' component={DeleonScreen} />
        <Route path='/hero' component={HeroScreen} />
      </Switch>
      <Scrollup />
      <Footer />
    </Router>
  )
}

export default App
