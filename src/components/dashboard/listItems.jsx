import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import UpdateIcon from '@mui/icons-material/Update';
import ArticleIcon from '@mui/icons-material/Article';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const MainListItems = ({onClickItem}) => {
  return (
    <React.Fragment>

      <ListItemButton onClick={() => onClickItem("dashboard")}> 
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("activo")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Activos" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("usuarios")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("hojaEntrega")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="hojaEntrega" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("ModActivo")}>
        <ListItemIcon>
          <UpdateIcon />
        </ListItemIcon>
        <ListItemText primary="Modificacion de Activo" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("Revaluacion")}>
        <ListItemIcon>
          <UpdateIcon />
        </ListItemIcon>
        <ListItemText primary="Revaluacion de Activo" />
      </ListItemButton>
      
      <ListItemButton onClick={() => onClickItem("Baja")}>
        <ListItemIcon>
          <HighlightOffIcon />
        </ListItemIcon>
        <ListItemText primary="Baja de Activo" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("ConActivo")}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Consolidado Activo" />
      </ListItemButton>
      
      <ListItemButton onClick={() => onClickItem("Listado")}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Lista Activo" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("Cambios")}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Cambios de Activo" />
      </ListItemButton>


      <ListItemButton onClick={() => onClickItem("Depre")}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Depreciaciones" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("Amorti")}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Amortizaciones" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("Exportar")}>
        <ListItemIcon>
          <DownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Exportar" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("Importacion")}>
        <ListItemIcon>
          <FileUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Importar" />
      </ListItemButton>

      <ListItemButton onClick={() => onClickItem("reports")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      
    </React.Fragment>
  )
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
