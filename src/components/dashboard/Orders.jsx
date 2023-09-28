import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '01 Agosto, 2023',
    'Laptop HP OMEN',
    'VISA ⠀•••• 3719',
    312.44,
    195.09
  ),
  createData(
    1,
    '16 Agosto, 2023',
    'MacBook Pro 2022',
    'VISA ⠀•••• 2574',
    866.99,
    578.32
  ),
  createData(
    3,
    '10 Agosto, 2023',
    'Toyota Hillux 2023',
    'AMEX ⠀•••• 2000',
    90567.39,
    40568.12
  ),
  createData(
    4,
    '15 Agosto, 2023',
    'Bocina JBL Charger 5',
    'VISA ⠀•••• 5919',
    212.79,
    127.37
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Datos Generales de los activos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Metodo de pago</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell align="right">Depreciación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{`Q${row.paymentMethod}`}</TableCell>
              <TableCell align="right">{`Q${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Cargar mas datos...
      </Link>
    </React.Fragment>
  );
}
