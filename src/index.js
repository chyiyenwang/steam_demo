import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.consumeApi();
  }

  consumeApi() {
    const url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0001/'
    fetch(url)
      .then(response => console.log(response))
      // .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        helloWorld
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));