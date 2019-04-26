import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { List, Label } from 'semantic-ui-react';



class RecipeItem extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    id: PropTypes.number,
    itemID: PropTypes.number,
    qty: PropTypes.number,
    name: PropTypes.string,
  };

  static defaultProps = {
    color: 'blue',
    id: -1,
    itemID: -1,
    qty: 0,
    name: '',
  };

  render() {
    const { name, color, qty } = this.props;
    return (
      <List.Item>
        <List.Content floated="right">
          <Label size="small" as="a">
            Remove
          </Label>
        </List.Content>
        <Label size="small" color={color}>
          {qty}
        </Label> {name}
      </List.Item>
    );
  }
}

export default RecipeItem;
