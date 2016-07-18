import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    console.log('current loc = '+this.props.location.pathname);
    return (
      <div className="jobijobo">
        {!(this.props.location.pathname == '/') ? <Header/> : null}
        {this.props.children}
        {!(this.props.location.pathname == '/') ? <Footer/> : null}
      </div>
    );
  }
}

export default App;
