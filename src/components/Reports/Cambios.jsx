import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';

function createData(codigo, nombre, categoria, valor, tipo, costo, fecha) {
  return {codigo, nombre, categoria, valor, tipo, costo, fecha};
}

const rows = [
  createData('A1001', 'Taladro eléctrico','Herramientas','Q.1,500.00', 'Modificación', 'Q.100.00', '22/09/2023'),
  createData('P0251TSB', 'Toyota Corolla','Vehículos','Q.75,000.00', 'Cambio de aceite', 'Q.200.00', '20/09/2023'),
  createData('E3001', 'Computadora de escritorio HP','Equipo de Cómputo','Q.6,000.00', 'Actualización de software', 'Q.50.00', '19/09/2023'),
  createData('T4001', '	Terreno en zona industrial','Terrenos','Q.200,000.00', '', '', ''),
  createData('E3002', 'Laptop Dell Latitude','Equipo de Cómputo','Q.5,500.00', 'Cambio de batería', 'Q.100.00', '18/09/2023'),
  createData('H5001', 'Sierra circular','Herramientas','Q.800.00', 'Mantenimiento', 'Q.30.00', '15/09/2023'),
  createData('E3003', 'Monitor ASUS','Equipo de Cómputo','Q.900.00', 'Limpieza', 'Q.10.00', '14/09/2023'),
  createData('ED6001', 'Edificio de oficinas','Edificio','Q.1,500,000.00', 'Renovación', 'Q.50,000.00', '10/09/2023'),
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Activos fijos
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Exportar() {
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ArticleIcon/>
          </Avatar>

          <Typography component="h1" variant="h5">
            Consolidado Cambios de Activo
          </Typography>

          <TableContainer component={Paper}>
       <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Identificacion del Activo</TableCell>
            <TableCell align="left">Nombre del Activo</TableCell>
            <TableCell align="center">Categoria del Activo</TableCell>
            <TableCell align="center">Valor del Activo</TableCell>
            <TableCell align="center">Tipo de Modificacion al Activo</TableCell>
            <TableCell align="center">Costo del Cambio o Modificacion</TableCell>
            <TableCell align="center">Fecha de Cambio o Modificacion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.codigo}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.categoria}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.valor}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.tipo}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.costo}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.fecha}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <Button fullWidth variant="contained" color="success" startIcon={<DownloadIcon />} sx={{ mt: 3, mb: 2 }}>
              Descargar Consolidado
        </Button>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}