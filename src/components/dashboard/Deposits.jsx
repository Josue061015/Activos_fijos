import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total en Activos</Title>
      <Typography component="p" variant="h4">
        Q.18,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
         18 Agosto, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mas balance
        </Link>
      </div>
    </React.Fragment>
  );
}
