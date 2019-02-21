import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCurrentPlayerField, clearCurrentPlayer } from '../actions/currentPlayerActions';
import { addPlayer, updatePlayerByIndex } from '../actions/playersActions';
import { disablePlayerEditing } from '../actions/editingPlayerIndexActions';

class PlayerForm extends Component {
  constructor(props) {
    super(props);

    this.scoreProps = { min: 0, max: 100 };
    this.validation = {
      firstName: /^[A-Za-z- ]+$/,
      lastName: /^[A-Za-z- ]+$/,
      score: value => value >= this.scoreProps.min && value <= this.scoreProps.max,
    };
  }

  handleChange(field, { target: { value } }) {
    let isValid = true;
    const validator = this.validation[field];

    if (validator instanceof RegExp) {
      isValid = validator.test(value);
    } else if (validator instanceof Function) {
      isValid = validator(value);
    }

    this.props.updateCurrentPlayerField({
      field,
      payload: {
        isPristine: !value,
        isValid,
        value
      }
    });
  }

  isDataReady() {
    let isValid = true;

    Object.keys(this.props.currentPlayer)
      .map(key => {
        if (this.props.currentPlayer[key].isValid === false) {
          isValid = false;
        }
      })

    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    const player = Object.keys(this.props.currentPlayer)
      .reduce((all, key) => {
        const value = this.props.currentPlayer[key].value;

        return { ...all, [key]: value };
      }, {});

    if (this.props.editingPlayerIndex === null) {
      this.props.addPlayer(player);
    } else {
      this.props.updatePlayerByIndex({ player, index: this.props.editingPlayerIndex });
      this.props.disablePlayerEditing();
    }

    this.props.clearCurrentPlayer();
  }

  hasError(field) {
    return field.isValid === false && field.isPristine === false;
  }

  handleClear() {
    if (this.props.editingPlayerIndex !== null) {
      this.props.disablePlayerEditing();
    }

    this.props.clearCurrentPlayer();
  }

  renderSaveButton() {
    const text = this.props.editingPlayerIndex === null ? 'Add' : 'Update';

    if (this.isDataReady()) {
      return <button className="btn btn-primary btn-sm">{ text }</button>;
    }

    return <button className="btn btn-primary btn-sm" disabled>{ text }</button>;
  }

  render() {
    return (
      <form onSubmit={ ::this.handleSubmit }>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            value={ this.props.currentPlayer.firstName.value }
            onChange={ event => ::this.handleChange('firstName', event) } />
          { ::this.hasError(this.props.currentPlayer.firstName) ?
            <div className="error">First name should contain letters only</div> : '' }
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            value={ this.props.currentPlayer.lastName.value }
            onChange={ event => ::this.handleChange('lastName', event) } />
          { ::this.hasError(this.props.currentPlayer.lastName) ?
            <div className="error">Last name should contain letters only</div> : '' }
        </div>
        <div className="form-group">
          <label>Score</label>
          <input
            type="number"
            className="form-control"
            value={ this.props.currentPlayer.score.value }
            onChange={ event => ::this.handleChange('score', event) }
            min={ this.scoreProps.min }
            max={ this.scoreProps.max }
          />
          { ::this.hasError(this.props.currentPlayer.score) ?
            <div className="error">
              Score must be integer between { this.scoreProps.min } and { this.scoreProps.max }
            </div> : '' }
        </div>
        <div className="form-group">
          { ::this.renderSaveButton() }
          <button onClick={ ::this.handleClear } type="button" className="btn btn-light ml-2 btn-sm">Cancel</button>
        </div>
      </form>
    );
  }
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => bindActionCreators({
    updateCurrentPlayerField, addPlayer, clearCurrentPlayer,
    updatePlayerByIndex, disablePlayerEditing
  }, dispatch)
)(PlayerForm);
