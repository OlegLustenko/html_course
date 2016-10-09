import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/navigation/Navigation';



class Classworks extends Component {
  render() {
    // console.log(this.props.classWorks);
    return (
      <nav className="nav navigtaion__aside">
        <Navigation items={this.props.classWorks} />
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    classWorks: state.classWorks
  }
}


export default connect(mapStateToProps)(Classworks)

// export default Classworks;