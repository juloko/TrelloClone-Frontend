import React from 'react';
import { FiX, FiArrowUp, FiArrowDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container, Badges, Title, Description, Controls, Button } from './styles';

export default function AddList() {
  return (
    <Container>
      <Badges>Features</Badges>
      <Title>Trollololw</Title>
      <Description>EIEIEIEIEIE</Description>
      <Controls>
        <FiArrowUp className="moveVerticalIcon pointer" size={14} color="#cacbcc" />
        <FiArrowDown className="moveVerticalIcon pointer" size={14} color="#cacbcc" />
        <FiArrowLeft className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
        <FiArrowRight className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
        <FiX className="deleteIcon pointer" size={14} color="#cacbcc" />
      </Controls>
    </Container>
  );
}
