
import './App.css';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { styles } from './styles';

function App() {

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        startIcon={<AcUnitIcon />}
        sx={styles.button}
      >Material Ui</Button>
    </div>
  );
}

export default App;
