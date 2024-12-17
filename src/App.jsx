import PropTypes from 'prop-types'
import Nav from './components/Nav/Nav'

function App({currentRoute}) {
  return (
    <div>
      <Nav currentRoute={currentRoute}/>
    </div>
  )
}

App.propTypes = {
  currentRoute: PropTypes.string
}

export default App
