import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Fighter from '../components/Fighter';
import FighterIcon from '../components/FighterIcon';
import TextIcon from '../components/TextIcon';
import NounIcon from '../components/NounIcon';

storiesOf('Fighter', module)
  .add('with no props', () => <Fighter />)
  .add('with fighter and no index', () => (
    <Fighter item={{ name: 'Goblin #1' }} />
  ))
  .add('with basic fighter', () => (
    <Fighter index={0} item={{ name: 'Goblin #1' }} />
  ))
  .add('with multi-stat fighter', () => (
    <Fighter
      index={0}
      item={{ name: 'Goblin #1', health: 10, armor: 10, initiative: 10 }}
    />
  ))
  .add('with basic player', () => (
    <Fighter index={0} item={{ name: 'Hero #1', player: true }} />
  ))
  .add('with multi-stat player', () => (
    <Fighter
      index={0}
      item={{
        name: 'Hero #1',
        player: true,
        health: 10,
        armor: 10,
        initiative: 10
      }}
    />
  ))
  .add('with long named player', () => (
    <Fighter
      index={0}
      item={{
        name: 'Davorin Gladomain the Blackguard',
        player: true,
        health: 10,
        armor: 10,
        initiative: 10
      }}
    />
  ));

const Wrapper = styled.div`
  border: 1px dashed black;
  height: 33px;
`;

const handleChange = action('handle-change');

storiesOf('FighterIcon', module)
  .add('with no props', () => (
    <Wrapper>
      <FighterIcon />
    </Wrapper>
  ))
  .add('with two digit number, position 0', () => (
    <Wrapper>
      <FighterIcon number={10} position={0} handleChange={handleChange} />
    </Wrapper>
  ))
  .add('with two digit number, position 1', () => (
    <Wrapper>
      <FighterIcon number={10} position={1} handleChange={handleChange} />
    </Wrapper>
  ))
  .add('with two FighterIcons side-by-side', () => (
    <Wrapper>
      <FighterIcon number={10} position={0} handleChange={handleChange} />
      <FighterIcon number={10} position={1} handleChange={handleChange} />
    </Wrapper>
  ));

storiesOf('TextIcon', module)
  .add('with no props', () => <TextIcon />)
  .add('with single digit number', () => (
    <TextIcon number={1} handleChange={handleChange} />
  ))
  .add('with two digit number', () => (
    <TextIcon number={10} handleChange={handleChange} />
  ))
  .add('with three digit number', () => (
    <TextIcon number={100} handleChange={handleChange} />
  ))
  .add('with icon', () => (
    <TextIcon icon="shield" handleChange={handleChange} />
  ))
  .add('with color', () => (
    <TextIcon color="grey" handleChange={handleChange} />
  ));

storiesOf('NounIcon', module).add('with src', () => (
  <NounIcon src="/icon_sword.svg" />
));
