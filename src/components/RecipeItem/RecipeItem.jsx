import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, Label, Dropdown, Icon } from 'semantic-ui-react';
import { Map } from 'immutable';

import { removeIngredientAction } from '../../store/actions';
import { connect } from 'react-redux';
import NumberInput from '../NumberInput/NumberInput';
import './RecipeItem.css';

const connector = connect(
  state => ({
    items: state.getIn(['item', 'collection']),
  }),
  { removeIngredientAction },
);

const toOptions = kv => ({
  key: kv[1].get('ID'),
  value: kv[1].get('ID'),
  text: kv[1].get('name'),
});

class RecipeItem extends PureComponent {
  static propTypes = {
    items: PropTypes.instanceOf(Map),
    color: PropTypes.string,
    id: PropTypes.number,
    itemID: PropTypes.number,
    qty: PropTypes.number,
    name: PropTypes.string,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    removeIngredientAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    color: 'blue',
    id: -1,
    itemID: -1,
    qty: 0,
    name: '',
    onSave() {},
    onCancel() {},
  };

  state = {
    isEditing: false,
    itemID: -1,
    newQty: 0,
  };

  handleClickConfirm = () => {
    const { onSave } = this.props;
    const { newQty, itemID } = this.state;
    onSave(newQty, itemID);
    this.setState({ isEditing: false });
  };

  handleClickCancel = () => {
    const { onCancel } = this.props;
    this.setState({ isEditing: false });
    onCancel();
  };

  handleClickEdit = () => {
    const { qty, itemID } = this.props;

    this.setState({
      itemID,
      newQty: qty,
      isEditing: true,
    });
  };

  handleClickRemove = () => {
    const { removeIngredientAction, id } = this.props;
    removeIngredientAction(id);
  };

  handleChangeItem = (event) => {
    this.setState({ itemID: event.target.value });
  };

  handleChangeQty = (newQty) => {
    this.setState({ newQty });
  };


  renderEditing() {
    const { items } = this.props;
    const { itemID, newQty } = this.state;
    return (
      <List.Item className="recipe-item">
        <List.Content floated="right">
          <Icon
            name="check"
            onClick={this.handleClickConfirm}
          />

          <Icon
            name="times"
            onClick={this.handleClickCancel}
          />
        </List.Content>
        <List.Content>
          <NumberInput
            value={newQty}
            onChange={this.handleChangeQty}
          />
          <Dropdown
            placeholder='Select Item'
            search
            selection
            value={itemID}
            onChange={this.handleChangeItem}
            options={items.toArray().map(toOptions)}
          />
        </List.Content>

      </List.Item>
    )
  }

  render() {
    const { name, color, qty } = this.props;
    if (this.state.isEditing) {
      return this.renderEditing();
    }
    return (
      <List.Item className="recipe-item">
        <List.Content floated="right">
          <Label.Group>
            <Label size="small" as="a" onClick={this.handleClickEdit}>
              Edit
            </Label>
            <Label size="small" as="a" onClick={this.handleClickRemove}>
              Remove
            </Label>
          </Label.Group>
        </List.Content>
        <Label size="small" color={color}>
          {qty}
        </Label> {name}
      </List.Item>
    );
  }
}

export default connector(RecipeItem);
