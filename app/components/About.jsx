var React = require("react");

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This app was build during a UDemy React JS Course. It is a weather app that uses the OpenWeatherMap API.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Get React here!
        </li>
        <li>
          Check the <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">course</a> out here!
        </li>
        <li>
          Here is a link to the GitHub repo: <a href="https://github.com/Ethan-Arrowood/ReactWeather">github</a>
        </li>
        <li>
          Open Weather Map: <a href="http://openweathermap.org">click here</a>
        </li>
      </ul>
    </div>

  )
};
module.exports = About;
