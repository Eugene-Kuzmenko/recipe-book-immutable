import React, { memo, useState } from 'react';
import { List, Icon, Segment, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { editIngredientAction, addIngredientAction } from '../../store/actions';
import RecipeItem from '../RecipeItem/RecipeItem';

const connector = connect(
  null,
  (dispatch, props) => ({
    onSave(id, item_id, qty) {
      dispatch(editIngredientAction({ id, item_id, qty }));
    },
    onAdd(item_id, qty) {
      dispatch(addIngredientAction({
        item_id,
        qty,
        recipe_id: props.recipeID,
        is_result: props.isResult,
      }));
    },
  })
);

function RecipeItemList({ isResult, items, color, title, onSave, onAdd }) {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Segment>
      <List divided >
        <List.Item>
          <List.Content floated="right">
            <Label
              as="a"
              size="small"
              color="green"
              onClick={() => { setIsAdding(true); }}
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
        {isAdding && (
          <RecipeItem
            isEditing
            onCancel={() => { setIsAdding(false); }}
            onSave={(id, itemID, qty)=> {
              setIsAdding(false);
              onAdd(itemID, qty)}
            }
          />
        )}
        {items.map((item) => (
          <RecipeItem
            key={item.get('ID')}
            id={item.get('ID')}
            itemID={item.get('itemID')}
            name={item.get('name')}
            qty={item.get('qty')}
            color={color}
            onSave={onSave}
          />
        )).toIndexedSeq()}
      </List>
    </Segment>
  )
}

export default connector(memo(RecipeItemList))