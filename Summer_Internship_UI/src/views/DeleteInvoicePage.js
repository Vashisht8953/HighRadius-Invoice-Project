import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { Dialog, IconButton, Button } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { CloseIcon } from '../assets';

const useStyles = makeStyles((theme) => ({
    dialogPaper: {
        minHeight: '33vh', 
        maxHeight: '33vh',
        minWidth: '30vw',
        maxWidth: '30vw',
        background: '#000000',
    },
    WindowHeader: {
        background: '#2A3E4C',
        borderRadius: '10px 10px 0px 0px',
        position: 'static',
    },
    Title: {
        color: '#FFFFFF',   
        font: 'Ubuntu',
        fontWeight: 'normal',
    },
    TopRightMenu: {
        position: 'fixed',
        top: '265px',
        right: '570px',
    },
    Body: {
        fontSize: '15px',
        color: '#97A1A9',
        background: '#2A3E4C',
    },
    CancelButton: {
        color: '#FFF',
        textTransform: 'none',
        border: '1px solid #14AFF1',
        borderRadius: 10,
        height: '30px',
    },
    DeleteButton: {
        color: '#FFF',
        textTransform: 'none',
        background: '#14AFF1',
        borderRadius: '10px',
        height: '30px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
}))

const DeleteInvoicePage = ({ open, setOpen, selected, setDataPageCount }) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleDelete = () => {
        axios.post('http://localhost:8080/1830196/DeleteSalesOrder', {selected})
        .then((response) => {
            console.log(response);
            handleClose();
            setDataPageCount(0);
        })
        .catch((error) => {
            console.log(error);
        })

        console.log(selected);
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={maxWidth} fullWidth={fullWidth} classes={{ paper: classes.dialogPaper }}>
            <MuiDialogTitle className={classes.WindowHeader}>
                <div style={{ display: 'flex' }}>
                    <div className={classes.Title}>
                        Delete Record(s)?
                    </div>
                    <div className={classes.TopRightMenu}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
            </MuiDialogTitle>
            <MuiDialogContent className={classes.Body}>
                <div>
                    <p>You'll loose your record(s) after this action. We can't recover them once deleted.</p>
                    <p style={{ display:'flex' }}>
                        <div>Are you sure you want to</div>
                        <div style={{ color: '#FF5E5E', paddingLeft: '0.3rem', paddingRight: '0.3rem'  }}>permanently delete</div>
                        <div>them?</div> 
                    </p>
                </div>
            </MuiDialogContent>
            <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                    <Button autofocus onClick={handleClose} className={classes.CancelButton}>Cancel</Button>
                </div>
                <div style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                    <Button autofocus onClick={handleDelete} className={classes.DeleteButton}>Delete</Button>
                </div>
            </MuiDialogActions>
        </Dialog>
    )
}

export default DeleteInvoicePage;