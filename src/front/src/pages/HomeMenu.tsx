import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ChargePointTable} from './BornesTable';
import { Button, TextField } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [clientId, setClientId] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const onBlurClientId = () => {

  }

  return (
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Bornes" {...a11yProps(0)} />
            <Tab label="Configuration" {...a11yProps(1)} />
            <Tab label="Firmware" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            Bornes
            <TextField value={clientId} onChange={(event: any) => {
                setClientId(event.target.value)
              }} onBlur={(event: any) => {
                setClientId(event.target.value + "COUCOU")
              }}> </TextField>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Configuration
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Firmware
          </TabPanel>
      </Box>
  );
}