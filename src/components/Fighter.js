import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Item, Header, Image, Responsive } from 'semantic-ui-react';

import FighterIcon from './FighterIcon';
import NounIcon from './NounIcon';
import placeholderFighter from '../assets/placeholderfighter.svg';

const HeaderContainer = styled(Item.Header)`
  &&& {
    display: inline-block;
  }
`;

const HeaderContainerWithEllipsis = styled(HeaderContainer)`
  @media only screen and (max-width: 500px) {
    width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const StyledPlaceholerImage = styled(Image)`
  opacity: 0.8;
`;

const StyledResponsive = styled(Responsive)`
  &&& {
    display: inline;
  }
`;

const Fighter = class extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    item: PropTypes.object,
    handleChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = { health: props.item ? props.item.health : null };
  }

  handleHealthChange = (event, data) => {
    this.setState({ health: data.value });

    if (this.props.handleChange) {
      this.props.handleChange({
        ...this.props.item,
        health: data.value
      });
    }
  };

  getFighter = (index, item) => (
    <Item.Content>
      <Item.Extra>
        {item.initiative && (
          <React.Fragment>
            <NounIcon src="/icon_sword.svg" floated="left" />
            <Header floated="left">{item.initiative}</Header>
          </React.Fragment>
        )}
      </Item.Extra>
      <HeaderContainerWithEllipsis>{item.name}</HeaderContainerWithEllipsis>
      {item.health && (
        <FighterIcon
          icon="heart outline"
          color="red"
          number={this.state.health}
          position={1}
          handleChange={this.handleHealthChange}
        />
      )}
      {item.armor && (
        <FighterIcon
          icon="shield"
          color="grey"
          number={item.armor}
          position={0}
          readonly
        />
      )}
    </Item.Content>
  );

  getEmptyFighter = () => (
    <Item.Content>
      <Item.Extra>
        <StyledPlaceholerImage floated="left" src={placeholderFighter} />
      </Item.Extra>
      <HeaderContainer />
      <StyledResponsive minWidth={600}>
        <FighterIcon
          icon="heart outline"
          color="grey"
          number={null}
          position={1}
        />
        <FighterIcon icon="shield" color="grey" number={null} position={0} />
      </StyledResponsive>
    </Item.Content>
  );

  render() {
    const { className, index, item } = this.props;
    return (
      <Segment className={className}>
        <Item>
          {item ? this.getFighter(index, item) : this.getEmptyFighter()}
        </Item>
      </Segment>
    );
  }
};

export default Fighter;
