import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';
import { Dialog, IconButton, Button, Input } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { CloseIcon } from '../assets';

const useStyles = makeStyles((theme) => console.log(theme) || ({
    dialogPaper: {
        minHeight: '60vh', 
        maxHeight: '60vh',
        minWidth: '60vw',
        maxWidth: '60vw'
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
        // border: '2px solid white',
    },
    Column1: {
        // border: '2px solid yellow',
        width: '30vw',
        height: '30vh',
        paddingLeft: '40px'
    },
    Column2: {
        // border: '2px solid red',
        width: '30vw',
        height: '30vh',
        paddingLeft: '50px'
    },
    InputBox: {
        color: '#FFFFFF',
        width: '205px',
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
        // textAlign: '',
        // borderBottom: 'none',
        border: '1px solid #356680',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px',
        height: '170px'
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

const DatePicker = () => {
    const classes = useStyles();
    const [ selectedDate, setSelectedDate ] = React.useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes.InputBox}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                // margin="normal"
                // id="date-picker-inline"
                invalidDateMessage=''
                value={selectedDate}
                onChange={handleDateChange}
                // emptyLabel=''
                // KeyboardButtonProps={{
                //   'aria-label': 'change date',
                // }}
                InputProps={{
                    disableUnderline: true,
                    color: 'primary',

                }}
            />
        </MuiPickersUtilsProvider>
    )
}

const AddMenu = () => {
    const classes = useStyles();
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
                            Invoice No.<div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
                        </div>
                        <div style={{ paddingBottom: '45px', display: 'flex' }}>
                            Invoice Amount<div style={{ color: 'red', paddingLeft: '5px' }}>*</div>
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
                                className={classes.InputBox}
                                disableUnderline={true}
                            >
                            </Input>
                        </div>
                        <div style={{ paddingBottom: '30px' }}>
                            <Input
                                className={classes.InputBox}
                                disableUnderline={true}
                            >
                            </Input>
                        </div>
                        <div>
                            <Input
                                className={classes.InputBox}
                                disableUnderline={true}
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
                            {/* <Input
                                className={classes.InputBox}
                                disableUnderline={true}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <DatePicker/>
                                    </InputAdornment>
                                }
                            >
                            </Input> */}
                            <DatePicker 
                                className={classes.InputBox}
                            />
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
            </div>
        </div>
    )
}

const AddInvoicePage = ({ open, setOpen }) => {
    const classes = useStyles();
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    return (
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
                <AddMenu/>
            </MuiDialogContent>
            <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                <div onClick={handleClose} style={{ position: 'fixed', left: '350px', paddingBottom: '10px' }}>
                    <Button autofocus className={classes.CancelButton}>Cancel</Button>
                </div>
                <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                    <Button autofocus className={classes.ClearButton}>Clear</Button>
                </div>
                <div style={{ paddingRight: '20px', paddingBottom: '10px' }}>
                    <Button autofocus className={classes.AddButton}>Add</Button>
                </div>
            </MuiDialogActions>
        </Dialog>
    )
}

export default AddInvoicePage;