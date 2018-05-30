import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import Pagination from '../components/Pagination';

const elements = storiesOf('Pagination', module);

elements.addDecorator(withKnobs);


elements.add('Pagination', () => {
  return  <Pagination
    selected={number("selected", 1)}
    pagesCount={number("pages count", 44)}
    onSelect={action("selected page")}
  />
});

