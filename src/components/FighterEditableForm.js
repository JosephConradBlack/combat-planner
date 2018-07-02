import React from 'react';
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

const FighterEditableForm = () => {
  return (
    <Segment>
      <Form>
        <Header as="h2">Add fighter</Header>
        <Form.Input
          required
          label="Fighter Name"
          placeholder="Goblin #1"
          name="name"
        />
        <Form.Group widths="equal">
          <Form.Field
            type="number"
            control="input"
            width={4}
            label="Initiative"
            placeholder="17"
            name="initiative"
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
          />
        </Form.Group>
        <Checkbox label="Is this a player?" name="player" />
        <Divider />
        <Button basic content="Cancel" />
        <Button positive floated="right" content="Add" />
      </Form>
    </Segment>
  );
};

FighterEditableForm.propTypes = {};

export default FighterEditableForm;
