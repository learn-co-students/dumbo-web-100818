import React from 'react';
import Hobbit from './Hobbit';
import EditForm from './EditForm';

import { connect } from 'react-redux'


class HobbitContainer extends React.Component {

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit key={hobbit.id} hobbit={hobbit} dog='dog' />;
    });
    return (
      <div>
        <div className="App-logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    hobbits: state.hobbits
  }
}


export default connect(mapStateToProps)(HobbitContainer)
