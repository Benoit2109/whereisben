import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function SnackBar() {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    return(
    <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity={error ? 'warning' : 'success'}
                >
                  {error
                    ? 'Veuillez compléter tous les champs!'
                    : 'Inscription réussie! Connectez-vous...'}
                </Alert>
              </Snackbar>
    )
};
