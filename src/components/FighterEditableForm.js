import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Segment,
  Header,
  Icon,
  Form,
  Checkbox,
  Responsive,
  Divider,
  Button
} from 'semantic-ui-react';

const StyledIcon = styled(Icon)`
  &&& {
    margin-top: 26px;
  }
`;

class FighterEditableForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      initiative: '',
      health: '',
      armor: '',
      player: false
    };
  }

  handleChange = (e, target) => {
    const { name, value, checked, type } = target ? target : e.target;

    if (type && type === 'checkbox') {
      this.setState(Object.assign({}, this.state, { [name]: checked }));
    } else {
      this.setState(Object.assign({}, this.state, { [name]: value }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleCancel = e => {
    e.preventDefault();

    this.setState({
      name: '',
      initiative: '',
      health: '',
      armor: '',
      player: ''
    });
  };

  render() {
    return (
      <Segment>
        <Form>
          <Header as="h2">Add fighter</Header>
          <Form.Input
            required
            label="Fighter Name"
            placeholder="Goblin #1"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Group widths="equal">
            <Form.Field
              type="number"
              control="input"
              width={4}
              label="Initiative"
              placeholder="17"
              name="initiative"
              value={this.state.initiative}
              onChange={this.handleChange}
            />

            <Responsive
              as={StyledIcon}
              minWidth={768}
              size="big"
              name="heart outline"
              color="red"
            />
            <Form.Field
              type="number"
              control="input"
              label="Health"
              placeholder="30"
              name="health"
              value={this.state.health}
              onChange={this.handleChange}
            />

            <Responsive
              as={StyledIcon}
              minWidth={768}
              size="big"
              name="shield"
              color="grey"
            />
            <Form.Field
              type="number"
              control="input"
              label="Armor"
              placeholder="18"
              name="armor"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Checkbox
            label="Is this a player?"
            name="player"
            checked={this.state.player}
            onChange={this.handleChange}
          />
          <Divider />
          <Button basic content="Cancel" onClick={this.handleCancel} />
          <Button positive floated="right" content="Add" />
        </Form>
      </Segment>
    );
  }
}

FighterEditableForm.propTypes = {};

export default FighterEditableForm;
