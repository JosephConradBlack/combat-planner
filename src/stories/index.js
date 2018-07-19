import React from 'react';
import { storiesOf } from '@storybook/react';

import TextIcon from '../components/TextIcon';

storiesOf('TextIcon', module)
  .add('with no props', () => <TextIcon />)
  .add('with single digit number', () => <TextIcon number={1} />)
  .add('with two digit number', () => <TextIcon number={10} />)
  .add('with icon', () => <TextIcon icon="shield" />)
  .add('with color', () => <TextIcon color="grey" />);
