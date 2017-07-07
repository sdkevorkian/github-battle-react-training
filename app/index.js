var React = require("react");
var ReactDOM = require("react-dom");
require('./index.css');

// Properties of components
// state
// lifecycle event (hooks to know when events occur)
// UI - only required property

class App extends React.Component {
    render() {
        return (
            <div>
              Hello React Training!!
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
