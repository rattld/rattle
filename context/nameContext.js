import React from 'react';

export const NameContext = React.createContext();

class NameProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nathaniel',
      updateName: this.updateName,
    };
  }

  updateName = (name) => {
    this.setState({name});
  }

  render() {
    return (
      <NameContext.Provider value={this.state}>
        {this.props.children}
      </NameContext.Provider>
    );
  }
}

export default NameProvider;
