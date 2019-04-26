import { Map } from 'immutable';

export const itemSerializer = item => Map({
  ID: item.id,
  name: item.name,
});

const itemListReducer = (collection, item) => collection.set(item.id, itemSerializer(item));

export const itemListSerializer = list => list.reduce(itemListReducer, Map());