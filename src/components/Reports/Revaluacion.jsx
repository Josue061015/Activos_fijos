import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UpdateIcon from '@mui/icons-material/Update';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import InputAdornment from '@mui/material/InputAdornment';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import MenuItem from '@material-ui/core/MenuItem';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Activos fijos
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const currencies = [
  {
    value: 'EXCEL',
    label: 'Excelente',
  },
  {
    value: 'BN',
    label: 'Bueno',
  },
  {
    value: 'REG',
    label: 'Regular',
  },
  {
    value: 'MAL',
    label: 'Malo',
  },
  {
    value: 'PES',
    label: 'Pesimo',
  },
];

const defaultTheme = createTheme();

export default function HojaEntrega() {
  const [currency, setCurrency] = React.useState('REG');
  const [value, setValue] = React.useState('Estado del cambio');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    setValue(event.target.value);
  };

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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <UpdateIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Revaluacion de Activos
          </Typography>
          <br />
                  
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Identificacion de activo"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  disabled
                  required
                  fullWidth
                  id="lastName"
                  label="Nombre del activo"
                  name="Marca"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField 
                  required 
                  fullWidth 
                  id="lastName"
                  label="Fecha de Revaluacion"
                  type='date'
                  color="secondary" 
                  name="lastName"
                  autoComplete="date"
                  focused />
              </Grid>

              <Grid item xs={18}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Periodos Fiscales en la empresa"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={10}>
                <TextField
                    required
                    fullWidth
                    id="price"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Q.</InputAdornment>,
                    }}
                    label = "Valor del Activo en el mercado"
                    name="price"
                    autoComplete="family-name"
                  />
              </Grid>

              <Grid item xs={12} sm={10}>
                <TextField
                    disabled
                    fullWidth
                    id="price"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">Q.</InputAdornment>,
                    }}
                    label = "Costo de cambios, remplazo y modificaciones"
                    name="price"
                    autoComplete="family-name"
                  />
              </Grid>

              <Grid item xs={12}>
              <TextField
                id="standard-select-currency"
                select
                label="Estado del Activo"
                value={currency}
                onChange={handleChange}
                helperText="Seleccione Estado del Activo"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="comentarios"
                  label="Observaciones"
                  name="comentarios"
                  autoComplete="family-name"
                />
            </Grid>

            </Grid>

            <Button fullWidth variant="contained" color="success" startIcon={<SaveAsIcon />} sx={{ mt: 3, mb: 2 }}>
              Guardar Cambios
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                    Regresar al inicio
                </Link>
              </Grid>
            </Grid>
          </Box>


        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}