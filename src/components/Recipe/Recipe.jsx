import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import {
  Icon,
  List,
  Label,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { removeRecipeAction, editIngredientAction } from '../../store/actions';

import RecipeItem from '../RecipeItem/RecipeItem';

const connector = connect(
  null,
  {
    removeRecipeAction,
    editIngredientAction,
  }
);

class Recipe extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    input: PropTypes.instanceOf(Map),
    output: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    name: '',
    id: '',
    input: Map(),
    output: Map(),
  };

  constructor(props, context) {
    super(props, context);
    this.renderIn = this.renderItem.bind(this, 'green');
    this.renderOut = this.renderItem.bind(this, 'red');
  }

  handleClickRemove = () => {
    const { removeRecipeAction, id } = this.props;
    removeRecipeAction(id)
  };

  handleConfirmEdit = (id, item_id, qty) => {
    const { editIngredientAction } = this.props;
    editIngredientAction({ id, item_id, qty });
  };

  renderItem = (color, item) => (
    <RecipeItem
      key={item.get('ID')}
      id={item.get('ID')}
      itemID={item.get('itemID')}
      name={item.get('name')}
      qty={item.get('qty')}
      color={color}
      onSave={this.handleConfirmEdit}
    />
  );

  renderItemList = (items, title, color, renderItem) => (
    <Segment>
      <List divided >
        <List.Item>
          <List.Content floated="right">
            <Label
              as="a"
              size="small"
              color="green"
            >
              <Icon name="plus" />
              Add
            </Label>
          </List.Content>
          <List.Content>
            <Label
              attached="top left"
              corner
            >
              {title}
            </Label>
          </List.Content>
        </List.Item>
        {items.map(renderItem).toIndexedSeq()}
      </List>
    </Segment>
  );

  render() {
    const { name, input, output } = this.props;

    return (
      <Segment>
        <Label attached="top" color="blue">
          {name}
          <Label
            as="a"
            size="tiny"
            color="black"
            attached="top right"
            onClick={this.handleClickRemove}
          >
            Remove
          </Label>
        </Label>

        <Segment.Group horizontal>
          {this.renderItemList(input, 'In', 'green', this.renderIn)}
          {this.renderItemList(output, 'Out', 'red', this.renderOut)}
        </Segment.Group>
      </Segment>
    );
  }
}

export default connector(Recipe);

