import React, { useState, memo } from 'react';
import { Segment, Input, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { getRecipesAction } from '../../store/actions';

const connector = connect(
  null,
  { getRecipesAction },
);

function RecipeSearchBar({ getRecipesAction }) {
  const [itemIn, setItemIn] = useState('');
  const [itemOut, setItemOut] = useState('');

  function handleClickSearch() {
    getRecipesAction({
      'in': itemIn,
      'out': itemOut,
    })
  }

  return (
    <Segment>
      <Input
        label="In"
        value={itemIn}
        onChange={(e, { value }) => { setItemIn(value) }}
      />
      <Input
        label="Out"
        value={itemOut}
        onChange={(e, { value }) => { setItemOut(value) }}
      />
      <Button
        color="blue"
        onClick={handleClickSearch}
      >
        <Icon name="search"/>
        Search
      </Button>
    </Segment>
  )
}

export default connector(memo(RecipeSearchBar));