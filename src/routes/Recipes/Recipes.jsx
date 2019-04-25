import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import {
  Container,
  Segment,
  Icon,
  List,
  Label,
  Button,
  Input,
} from 'semantic-ui-react';

import { getRecipesAction } from '../../store/actions';
import { Recipe } from '../../components';

const mapStateToProps = state => ({
  recipes: state.getIn(['recipe', 'collection']),
});

const mapDispatchToProps = {
  getRecipesAction,
};

class Recipes extends PureComponent {

  componentDidMount() {
    this.props.getRecipesAction();
  }

  static propTypes = {
    recipes: PropTypes.instanceOf(Map),
    getRecipesAction: PropTypes.func.isRequired,
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
              onChange={this.changeRecipeName}
              action={{ color: 'green', content: 'Add', icon: 'plus'}}
            />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
