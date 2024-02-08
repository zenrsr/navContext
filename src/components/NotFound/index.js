import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="not-container-dark">
          <Navbar />
          <div className="inner-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="not-found"
            />
            <h1 className="not-found-heading-dark">Lost your way ?</h1>
            <p className="not-found-text-dark">
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </div>
      ) : (
        <div className="not-container">
          <Navbar />
          <div className="inner-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="not-found"
            />
            <h1 className="not-found-heading">Lost your way ?</h1>
            <p className="not-found-text">
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
