import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export const MainLayout = ({content}) => (
  <div>
    {content()}
  </div>
);

