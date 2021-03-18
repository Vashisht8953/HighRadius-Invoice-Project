import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';
import { Dialog, IconButton, Button, Input } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { CloseIcon } from '../assets';

const useStyles = makeStyles((theme) => ({
    dialogPaper: {
        minHeight: '60vh', 
        maxHeight: '60vh',
        minWidth: '30vw',
        maxWidth: '30vw'
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
        top: '160px',
        right: '570px',
    },
    Body: {
        fontSize: '15px',
        color: '#97A1A9',
        background: '#2A3E4C',
        paddingBlock: '40px',
    },
    InputBox: {
        color: '#FFFFFF',
        width: '240px',
        // borderBottom: 'none',
        border: '1px solid #356680',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    NotesInputBox: {
        color: '#97A1A9',
        textAlign: 'top',
        width: '240px',
        // textAlign: '',
        // borderBottom: 'none',
        border: '1px solid #356680',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px',
        height: '150px'
    },
    CancelButton: {
        color: '#14AFF1',
        textTransform: 'none',
    },
    ResetButton: {
        color: '#FFF',
        textTransform: 'none',
        border: '1px solid #14AFF1',
        borderRadius: 10,
        height: '30px',
    },
    SaveButton: {
        color: '#FFF',
        textTransform: 'none',
        background: '#14AFF1',
        borderRadius: '10px',
        height: '30px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
}))

const EditMenu = () => {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ paddingLeft: '20px', paddingRight: '30px', paddingTop: '5px', fontSize: '17px' }}>
                <div style={{ paddingBottom: '45px', display: 'flex' }}>
                    Invoice Amount
                </div>
                <div style={{ paddingBottom: '45px', display: 'flex' }}>
                    Notes
                </div>
            </div>
            <div>
                <div style={{ paddingBottom: '30px' }}>
                    <Input
                        className={classes.InputBox}
                        disableUnderline={true}
                    >
                    </Input>
                </div>
                <div style={{ paddingBottom: '30px' }}>
                    <Input
                        className={classes.NotesInputBox}
                        disableUnderline={true}
                    >
                    </Input>
                </div>
            </div>
        </div>
    )
}

const EditInvoicePage = ({ open, setOpen }) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog onCLose={handleClose} open={open} maxWidth={maxWidth} fullWidth={fullWidth} classes={{ paper: classes.dialogPaper }}>
            <MuiDialogTitle className={classes.WindowHeader}>
                <div style={{ display: 'flex' }}>
                    <div className={classes.Title}>
                        Edit Invoice
                    </div>
                    <div className={classes.TopRightMenu}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
            </MuiDialogTitle>
            <MuiDialogContent className={classes.Body}>
                <EditMenu/>
            </MuiDialogContent>
            <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                <div onClick={handleClose} style={{ position: 'fixed', left: '585px', paddingBottom: '10px' }}>
                    <Button autofocus className={classes.CancelButton}>Cancel</Button>
                </div>
                <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                    <Button autofocus className={classes.ResetButton}>Reset</Button>
                </div>
                <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                    <Button autofocus className={classes.SaveButton}>Save</Button>
                </div>
            </MuiDialogActions>
        </Dialog>
    );
}

export default EditInvoicePage;