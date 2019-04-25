import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import {
  Container,
  Segment,
  Input,
} from 'semantic-ui-react';

import { getRecipesAction, addRecipeAction } from '../../store/actions';
import { Recipe } from '../../components';

const mapStateToProps = state => ({
  recipes: state.getIn(['recipe', 'collection']),
});

const mapDispatchToProps = {
  getRecipesAction,
  addRecipeAction,
};

class Recipes extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.addRecipeButtonProps = {
      color: 'green',
      content: 'Add',
      icon: 'plus',
      onClick: this.handleClickRecipeAdd,
    }
  }


  componentDidMount() {
    this.props.getRecipesAction();
  }

  static propTypes = {
    recipes: PropTypes.instanceOf(Map),
    getRecipesAction: PropTypes.func.isRequired,
    addRecipeAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    recipes: Map(),
  };

  state = {
    newRecipeName: '',
  };

  handleChangeRecipeName = (event) => {
    this.setState({ newRecipeName: event.target.value })
  };

  handleClickRecipeAdd = () => {
    const { addRecipeAction } = this.props;
    const { newRecipeName } = this.state;
    addRecipeAction({ name: newRecipeName });
  };

  renderRecipe = (recipe) => (
    <Recipe
      key={recipe.get('ID')}
      id={recipe.get('ID')}
      name={recipe.get('name')}
      input={recipe.get('input')}
      output={recipe.get('output')}
    />
  );

  render() {
    const { recipes } = this.props;
    const { newRecipeName } = this.state;
    return (
      <Container>
        <Segment.Group>
          {recipes.map(this.renderRecipe).toIndexedSeq()}
          <Segment>
            <Input
              label="New Recipe"
              value={newRecipeName}
              onChange={this.handleChangeRecipeName}
              action={this.addRecipeButtonProps}
            />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
