import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { Dialog, IconButton, Button, Input } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { CloseIcon, MandatoryFieldsLogo } from '../assets';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => console.log(theme) || ({
    dialogPaper: {
        minHeight: '60vh', 
        maxHeight: '60vh',
        minWidth: '60vw',
        maxWidth: '60vw',
        background: '#000000',
    },
    errorbox: {
        minHeight: '8vh', 
        maxHeight: '8vh',
        minWidth: '25vw',
        maxWidth: '25vw',
        position: 'absolute',
        bottom: '10px',
        left: '10px',
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
        right: '330px',
    },
    Body: {
        fontSize: '15px',
        color: '#97A1A9',
        background: '#2A3E4C',
        paddingBlock: '40px',
    },
    Column1: {
        width: '30vw',
        height: '30vh',
        paddingLeft: '40px'
    },
    Column2: {
        width: '30vw',
        height: '30vh',
        paddingLeft: '50px'
    },
    InputBox: {
        color: '#FFFFFF',
        width: '205px',
        border: '1px solid #356680',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    ErrorInputBox: {
        color: '#FFFFFF',
        width: '205px',
        border: '1px solid #FF5B5B',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    CancelButton: {
        color: '#14AFF1',
        textTransform: 'none',
    },
    ClearButton: {
        color: '#FFF',
        textTransform: 'none',
        border: '1px solid #14AFF1',
        borderRadius: 10,
        height: '30px',
    },
    AddButton: {
        color: '#FFF',
        textTransform: 'none',
        background: '#14AFF1',
        borderRadius: '10px',
        height: '30px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
}))

const MandatoryFieldsPopUp = ({ open, setOpen }) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);
    

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog 
            onCLose={handleClose} 
            open={open}
            maxWidth={maxWidth} 
            fullWidth={fullWidth} 
            classes={{ paper: classes.errorbox }}
        >
            <MuiDialogContent 
                className={classes.Body}
                style={{
                    overflow: 'hidden',
                    borderLeft: '5px solid #FF5B5B',
                    borderRadius: 10,
                    color: '#FFFFFF',
                    display: 'flex',
                }}
            >
                <div style={{ paddingRight: '10px' }}>
                    <MandatoryFieldsLogo/>
                </div>
                <div>
                    Mandatory fields can't be empty
                </div>
                <div style={{ position: 'absolute', right: '10px', top: '8px' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </div>
            </MuiDialogContent>
        </Dialog>
    );
}

const DatePicker = ({ dueDate, setDueDate, setAddButtonClicked, isErrorDueDate }) => {
    const classes = useStyles();

    const handleDueDate = (date) => {
        setAddButtonClicked(false);
        setDueDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={isErrorDueDate ? classes.ErrorInputBox : classes.InputBox}
                disableToolbar
                variant="inline"
                error={isErrorDueDate}
                onChange={handleDueDate}
                format='dd/MM/yyyy'
                invalidDateMessage=''
                value={dueDate}
                InputProps={{
                    disableUnderline: true,
                    color: 'primary',

                }}
            />
        </MuiPickersUtilsProvider>
    )
}

const AddMenu = ({ 
    customerName, setCustomerName,
    customerNumber, setCustomerNumber,
    invoiceNumber, setInvoiceNumber,
    invoiceAmount, setInvoiceAmount,
    dueDate, setDueDate,
    notes, setNotes,
    addButtonClicked, setAddButtonClicked,
 }) => {

    const classes = useStyles();

    const handleCustomerName = (event) => {
        setAddButtonClicked(false);
        setCustomerName(event.target.value);
    }

    const handleCustomerNumber = (event) => {
        setAddButtonClicked(false);
        setCustomerNumber(event.target.value);
    }

    const handleInvoiceNumber = (event) => {
        setAddButtonClicked(false);
        setInvoiceNumber(event.target.value);
    }

    const handleInvoiceAmount = (event) => {
        setAddButtonClicked(false);
        setInvoiceAmount(event.target.value);
    }

    const handleNotes = (event) => {
        setAddButtonClicked(false);
        setNotes(event.target.value);
    }

    const isErrorCustomerName = (customerName === '' && addButtonClicked);
    const isErrorCustomerNumber = (customerNumber === '' && addButtonClicked);
    const isErrorInvoiceNumber = (invoiceNumber === '' && addButtonClicked);
    const isErrorInvoiceAmount = (invoiceAmount === '' && addButtonClicked);
    const isErrorDueDate = (dueDate === '' && addButtonClicked);

    return (
        <div style={{ display: 'flex' }}>
            <div className={classes.Column1}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px', paddingTop: '5px', fontSize: '17px' }}>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Customer Name<div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
                        </div>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Customer No.<div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
                        </div>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Sales Order No.<div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
                        </div>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Sales Order Amount<div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '30px' }}>
                            <Input
                                className={isErrorCustomerName ? classes.ErrorInputBox : classes.InputBox}
                                disableUnderline={true}
                                required={true}
                                value={customerName}
                                onChange={(event) => handleCustomerName(event)}
                                error={isErrorCustomerName}
                            >
                            </Input>
                        </div>
                        <div style={{ paddingBottom: '30px' }}>
                            <Input
                                className={isErrorCustomerNumber ? classes.ErrorInputBox : classes.InputBox}
                                disableUnderline={true}
                                required={true}
                                value={customerNumber}
                                onChange={(event) => handleCustomerNumber(event)}
                                error={isErrorCustomerNumber}
                            >
                            </Input>
                        </div>
                        <div style={{ paddingBottom: '30px' }}>
                            <Input
                                className={isErrorInvoiceNumber ? classes.ErrorInputBox : classes.InputBox}
                                disableUnderline={true}
                                required={true}
                                value={invoiceNumber}
                                onChange={(event) => handleInvoiceNumber(event)}
                                error={isErrorInvoiceNumber}
                            >
                            </Input>
                        </div>
                        <div>
                            <Input
                                className={isErrorInvoiceAmount ? classes.ErrorInputBox : classes.InputBox}
                                disableUnderline={true}
                                required={true}
                                value={invoiceAmount}
                                onChange={(event) => handleInvoiceAmount(event)}
                                error={isErrorInvoiceAmount}
                            >
                            </Input>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.Column2}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px', paddingTop: '5px', fontSize: '17px' }}>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Due Date <div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
                        </div>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Notes
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '30px' }}>
                            <DatePicker 
                                dueDate={dueDate}
                                setDueDate={setDueDate}
                                addButtonClicked={addButtonClicked}
                                setAddButtonClicked={setAddButtonClicked}
                                isErrorDueDate={isErrorDueDate}
                            />
                        </div>
                        <div style={{ paddingBottom: '30px' }}>
                            <Input
                                className={classes.InputBox}
                                style={{ height: '170px', width: '230px' }}
                                disableUnderline={true}
                                value={notes}
                                onChange={(event) => handleNotes(event)}
                            >
                            </Input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddInvoicePage = ({ open, setOpen, setDataPageCount, setData }) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);

    const [ customerName, setCustomerName ] = React.useState('');
    const [ customerNumber, setCustomerNumber ] = React.useState('');
    const [ invoiceNumber, setInvoiceNumber ] = React.useState('');
    const [ invoiceAmount, setInvoiceAmount ] = React.useState('');
    const [ dueDate, setDueDate ] = React.useState('');
    const [ notes, setNotes ] = React.useState('');

    const [ addButtonClicked, setAddButtonClicked ] = React.useState(false);
    const [ openMandatoryFieldsPopUp, setOpenMandatoryFieldsPopUp ] = React.useState(false);

    const handleAddButton = () => {
        setAddButtonClicked(true);
        if(
            customerName !== '' && 
            customerNumber !== '' &&
            invoiceNumber !== '' &&
            invoiceAmount !== '' &&
            dueDate !== ''
        ) {
            axios.post(
                'http://localhost:8080/1830196/AddInvoice', 
                {
                    customerName, 
                    customerNumber, 
                    invoiceNumber, 
                    invoiceAmount, 
                    dueDate, 
                    notes
                }
            )
            .then((response) => {
                console.log(response);
                // setData([])
                // setDataPageCount(0);
            })
            .catch((error) => {
                console.log(error);
            });

            handleClose();
        }
        else {
            setOpenMandatoryFieldsPopUp(true);
        }
    }

    const handleClearButton = () => {
        setAddButtonClicked(false);
        setCustomerName('');
        setCustomerNumber('');
        setInvoiceNumber('');
        setInvoiceAmount('');
        setDueDate('');
        setNotes('');
    }

    const handleClose = () => {
        handleClearButton();
        setOpen(false);
    }

    return (
        <Fragment>
            <Fragment>
                <Dialog onCLose={handleClose} open={open} maxWidth={maxWidth} fullWidth={fullWidth} classes={{ paper: classes.dialogPaper }}>
                    <MuiDialogTitle className={classes.WindowHeader} >
                        <div style={{ display: 'flex' }}>
                            <div className={classes.Title}>
                                Add Invoice
                            </div>
                            <div className={classes.TopRightMenu}>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </MuiDialogTitle>
                    <MuiDialogContent className={classes.Body}>
                        <AddMenu
                            customerName={customerName} setCustomerName={setCustomerName}
                            customerNumber={customerNumber} setCustomerNumber={setCustomerNumber}
                            invoiceNumber={invoiceNumber} setInvoiceNumber={setInvoiceNumber}
                            invoiceAmount={invoiceAmount} setInvoiceAmount={setInvoiceAmount}
                            dueDate={dueDate} setDueDate={setDueDate}
                            notes={notes} setNotes={setNotes}
                            addButtonClicked={addButtonClicked} setAddButtonClicked={setAddButtonClicked}
                        />
                    </MuiDialogContent>
                    <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                        <div onClick={handleClose} style={{ position: 'fixed', left: '350px', paddingBottom: '10px' }}>
                            <Button autofocus className={classes.CancelButton}>Cancel</Button>
                        </div>
                        <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                            <Button autofocus className={classes.ClearButton} onClick={handleClearButton}>Clear</Button>
                        </div>
                        <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                            <Button autofocus className={classes.AddButton} onClick={handleAddButton}>Add</Button>
                        </div>
                    </MuiDialogActions>
                </Dialog>
            </Fragment>
            <Fragment>
                <MandatoryFieldsPopUp
                    open={openMandatoryFieldsPopUp}
                    setOpen={setOpenMandatoryFieldsPopUp}
                />
            </Fragment>
        </Fragment>
    )
}

export default AddInvoicePage;