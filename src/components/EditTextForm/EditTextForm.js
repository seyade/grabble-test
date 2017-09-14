import React, { Component } from 'react';
import TextInput from '../common/form/TextInput/TextInput';
import TextArea from '../common/form/TextArea/TextArea';
import Button from '../common/form/Button/Button';

class EditTextForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      type: 'text'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    console.log('Form state: ', this.state);
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="grabble-edit-form">
        <legend>Edit Text</legend>
        <TextInput
          id="title"
          label="Title"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange} />

        <TextArea
          id="body"
          name="body"
          label="Body"
          placeholder="Body"
          rows={10}
          cols={80}
          value={this.state.body}
          onChange={this.handleChange} />

        <div className="grabble-edit-form__options">
          <a href="" className="">CANCEL</a>
          <Button
            type="submit"
            onSave={this.handleSave}
            text="SAVE"/>
        </div>
      </form>
    );
  }
}

export default EditTextForm;
