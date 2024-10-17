import React from 'react';
import '../styles/fancy.css'
import { Button } from 'react-bootstrap';

function FancyHeader() {
  return (
    <div className="fancy-header">
      <h1>Fancy Header</h1>
      <p>This is a fancy header with a background image and centered text.</p>
      <Button className="btn btn-primary">Get Started</Button>
    </div>
  );
}

export default FancyHeader;