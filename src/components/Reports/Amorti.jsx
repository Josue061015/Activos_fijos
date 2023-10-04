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

function createData(codigo, nombre, categoria, valor, ubicacion, amortizacion, amortizacum) {
  return {codigo, nombre, categoria, valor, ubicacion, amortizacion, amortizacum};
}

const rows = [
  createData('', '','','', '', '', ''),
  createData('', '','','', '', '', ''),
  createData('', '','','', '', '', ''),
  createData('', '','','', '', '', ''),
  createData('', '','','', '', '', ''),
  createData('', '','','', '', '', ''),
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
            Consolidado Amortizacion de Activo
          </Typography>

          <TableContainer component={Paper}>
       <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Identificacion del Activo</TableCell>
            <TableCell align="left">Nombre del Activo</TableCell>
            <TableCell align="center">Categoria del Activo</TableCell>
            <TableCell align="center">Valor del Activo</TableCell>
            <TableCell align="center">Ubicacion del Activo</TableCell>
            <TableCell align="center">Amortizacion</TableCell>
            <TableCell align="center">Amortizacion Acumulada</TableCell>
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
                {row.ubicacion}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.amortizacion}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.amortizacum}
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