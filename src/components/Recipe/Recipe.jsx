import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import {
  Label,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import RecipeItemList from '../RecipeItemList/RecipeItemList';
import { removeRecipeAction } from '../../store/actions';

const connector = connect(
  null,
  { removeRecipeAction }
);

class Recipe extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    input: PropTypes.instanceOf(Map),
    output: PropTypes.instanceOf(Map),
    removeRecipeAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    name: '',
    id: '',
    input: Map(),
    output: Map(),
  };

  handleClickRemove = () => {
    const { removeRecipeAction, id } = this.props;
    removeRecipeAction(id)
  };


  render() {
    const { name, input, output, id } = this.props;

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
          <RecipeItemList
            recipeID={id}
            color="green"
            title="In"
            items={input}

          />
          <RecipeItemList
            isResult
            recipeID={id}
            color="red"
            title="Out"
            items={output}
          />
        </Segment.Group>
      </Segment>
    );
  }
}

export default connector(Recipe);

