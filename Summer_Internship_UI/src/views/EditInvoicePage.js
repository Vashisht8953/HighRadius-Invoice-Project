import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
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
        border: '1px solid #356680',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    ErrorInputBox: {
        color: '#FFFFFF',
        width: '240px',
        border: '1px solid #FF5B5B',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px'
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

const EditMenu = ({
    invoiceAmount, notes,
    newInvoiceAmount, setNewInvoiceAmount,
    newNotes, setNewNotes,
    setSaveButtonClicked,
    isErrorNewInvoiceAmount
}) => {
    const classes = useStyles();

    const handleInvoiceAmount = (event) => {
        setSaveButtonClicked(false);
        setNewInvoiceAmount(event.target.value);
    }

    const handleNotes = (event) => {
        setSaveButtonClicked(false);
        setNewNotes(event.target.value);
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ paddingLeft: '10px', paddingTop: '5px', fontSize: '17px' }}>
                <div style={{ paddingBottom: '45px', paddingRight: '10px', display: 'flex', width: '160px' }}>
                    Sales Order Amount
                </div>
                <div style={{ paddingBottom: '45px', display: 'flex' }}>
                    Notes
                </div>
            </div>
            <div>
                <div style={{ paddingBottom: '30px' }}>
                    <Input
                        className={isErrorNewInvoiceAmount ? classes.ErrorInputBox : classes.InputBox}
                        disableUnderline={true}
                        value={newInvoiceAmount}
                        placeholder={invoiceAmount}
                        onChange={(event) => handleInvoiceAmount(event)}
                    >
                    </Input>
                </div>
                <div style={{ paddingBottom: '30px' }}>
                    <Input
                        className={classes.InputBox}
                        style={{ height: '150px' }}
                        disableUnderline={true}
                        value={newNotes}
                        placeholder={notes}
                        onChange={(event) => handleNotes(event)}
                    >
                    </Input>
                </div>
            </div>
        </div>
    )
}

const EditInvoicePage = ({ 
    open, setOpen,
    selectedInvoiceDetails,
    setDataPageCount, setData
}) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);

    const invoiceNumber = selectedInvoiceDetails.length === 0 ? '' : selectedInvoiceDetails[0]['doc_id']
    const invoiceAmount = selectedInvoiceDetails.length === 0 ? '' : selectedInvoiceDetails[0]['total_open_amount']
    const notes = selectedInvoiceDetails.length === 0 ? '' : selectedInvoiceDetails[0]['notes'];

    const [ newInvoiceAmount, setNewInvoiceAmount ] = React.useState(invoiceAmount);
    const [ newNotes, setNewNotes ] = React.useState(notes);
    const [ saveButtonClicked, setSaveButtonClicked ] = React.useState(false);

    const isErrorNewInvoiceAmount = (newInvoiceAmount === '' && saveButtonClicked);

    const handleSave = () => {
        if(newInvoiceAmount !== '') {
            axios.post('http://localhost:8080/1830196/EditSalesOrder', 
            {
                invoiceNumber, 
                newInvoiceAmount,
                newNotes
            })
            .then((response) => {
                console.log(response);
                handleClose();
                // setData([])
                // setDataPageCount(0);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        setSaveButtonClicked(true);
    }

    const handleReset = () => {
        setNewInvoiceAmount(invoiceAmount);
        setNewNotes(notes);
    }

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
                <EditMenu
                    invoiceAmount={invoiceAmount} notes={notes}
                    newInvoiceAmount={newInvoiceAmount} setNewInvoiceAmount={setNewInvoiceAmount}
                    newNotes={newNotes} setNewNotes={setNewNotes}
                    saveButtonClicked={saveButtonClicked} setSaveButtonClicked={setSaveButtonClicked}
                    isErrorNewInvoiceAmount={isErrorNewInvoiceAmount}
                />
            </MuiDialogContent>
            <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                <div style={{ position: 'fixed', left: '585px', paddingBottom: '10px' }}>
                    <Button 
                        autofocus 
                        className={classes.CancelButton} 
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </div>
                <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                    <Button 
                        autofocus 
                        className={classes.ResetButton}
                        onClick={handleReset}>Reset</Button>
                </div>
                <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                    <Button 
                        autofocus 
                        className={classes.SaveButton}
                        onClick={handleSave}>Save</Button>
                </div>
            </MuiDialogActions>
        </Dialog>
    );
}

export default EditInvoicePage;