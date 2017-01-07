import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (this.props.location.pathname == '/') ? (
      <div className="jobijobo">
        {this.props.children}
      </div>
    ) : (
      <div className="jobijobo">
        <div className="wrapper">
          <Header/>
          {this.props.children}
          <div className="push"></div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;


// {!(this.props.location.pathname == '/') ? (
//   <div className="wrapper">
//     <Header/>
//     {this.props.children}
//     <Footer/>
//   </div>
// ) : {this.props.children};
// }
