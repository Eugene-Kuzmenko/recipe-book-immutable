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

const mapStateToProps = state => ({
  recipes: state.getIn(['recipe', 'collection']).toArray(),
});

const mapDispatchToProps = {
  getRecipesAction,
};

class Recipes extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.renderIn = this.renderItem.bind(this, 'green');
    this.renderOut = this.renderItem.bind(this, 'red');
  }


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

  renderItem = (color, itemKV) => (
    <List.Item key={itemKV[0]}>
      <List.Content floated="right">
        <Label size="small" as="a">
          Remove
        </Label>
      </List.Content>
      <Label size="small" color={color}>
        {itemKV[1].get('qty')}
      </Label> {itemKV[1].get('name')}
    </List.Item>
  );

  renderItemList = (recipe, title, groupName, color, renderItem) => (
    <Segment>
      <List divided >
        <List.Item>
          <List.Content floated="right">
            <Label size="small" as="a" color="green">
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
        {recipe.get(groupName).toArray().map(renderItem)}
      </List>
    </Segment>
  );

  renderRecipe = (recipeKV) => (
    <Segment key={recipeKV[0]}>
      <Label attached="top" color="blue">
        {recipeKV[1].get('name')}
      </Label>

      <Segment.Group horizontal>
        {this.renderItemList(recipeKV[1], 'In', 'input', 'green', this.renderIn)}
        {this.renderItemList(recipeKV[1], 'Out', 'output', 'red', this.renderOut)}
      </Segment.Group>
    </Segment>
  );

  render() {
    const { recipes } = this.props;
    const { newRecipeName } = this.state;
    return (
      <Container>
        <Segment.Group>
          {recipes.map(this.renderRecipe)}
          <Segment>
            <Input
              label="New Recipe"
              value={newRecipeName}
              onChange={newRecipeName}
              action={{ color: 'green', content: 'Add', icon: 'plus '}}
            />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
