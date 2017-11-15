import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
  }

  linkState(key) {
    return (event => this.setState({ [key]: event.currentTarget.value }));
  }

  uniqueID() {
    return new Date().getTime();
  }

  addToDo() {
    return () => {
      const newTodo = Object.assign({}, this.state);
      newTodo['id'] = this.uniqueID();
      console.log(newTodo);
      this.props.createTodo(newTodo);
      this.setState({title: '', body: ''});
    };
  }

  render() {
    return (
      <div>
        <label htmlFor='form-title'><h3>Title</h3></label>
        <input
          id='title'
          onChange={ this.linkState('title') }
          value={ this.state.title } />
        <br />
        <label htmlFor='form-body'><h3>Comment</h3></label>
        <textarea
          id='body'
          onChange={ this.linkState('body') }
          value={ this.state.body } />
        <input
          type='submit'
          onClick={ this.addToDo() }
          value='submit' />
      </div>
    );
  }

}

export default TodoForm;
