import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Select, MenuItem } from '@material-ui/core';
import { Dialog, IconButton, Button } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { CloseIcon } from '../assets';

const useStyles = makeStyles((theme) => ({
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
        top: '80px',
        right: '170px',
        display: 'flex'
    },
    Dropdown: {
        width: '180px',
        color: '#FFFFFF',
        background: '#283A46',
        border: '1px solid #356680',
        borderRadius: 10,
        paddingLeft: '20px',
        paddingTop: '3px',
        paddingBottom: '3px',
    },
    ViewText: {
        paddingTop: '16px', 
        paddingRight: '25px',
        font: 'Ubuntu',
        fontWeight: 'normal',
        fontSize: '17px',
        letterSpacing: '0.33px',
        color: '#C0C6CA',
    },
    Body: {
        fontSize: '15px',
        color: '#97A1A9',
        background: '#2A3E4C',
    },
    tableHeading: {
        backgroundColor: '#273D49CC',
        color: '#97A1A9',
        fontSize: '13px',
        borderBottom: 'none',
        opacity: '100%',
    },
    tableBody: {
        "&:nth-of-type(odd)": {
            backgroundColor: '#273D49CC',
        },
        "&:nth-of-type(even)": {
            backgroundColor: "#283A46"
        },
        color: '#FFFFFF',
    },
    tableRow: {
        color: '#FFFFFF',
        borderBottom: 'none',
        height: '10px',
        fontSize: '14px',
    },
    dialogPaper: {
        minHeight: '80vh', 
        maxHeight: '80vh',
        minWidth: '80vw',
        maxWidth: '80vw'
    },
    CancelButton: {
        color: '#14AFF1',
        textTransform: 'none',
    },
    DownloadButton: {
        color: '#FFF',
        textTransform: 'none',
        background: '#14AFF1',
        borderRadius: '10px',
        height: '30px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
}));

function createData(invoiceNumber, PONumber, invoiceDate, dueDate, currency, openAmount) {
    return { invoiceNumber, PONumber, invoiceDate, dueDate, currency, openAmount };
}

const rows = [
    createData('73457346735', '73457346735', '23-Jan-2021', '02-Jan-2021', 'USD', '122.55K'),
    createData('54723243652', '54723243652', '15-Jan-2021', '15-Jan-2021', 'USD', '1.45K'),
]

const InvoiceDetailsTable = () => {
    const classes = useStyles();
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeading}>Invoice Number</TableCell>
                        <TableCell className={classes.tableHeading}>PO Number</TableCell>
                        <TableCell className={classes.tableHeading}>Invoice Date</TableCell>
                        <TableCell className={classes.tableHeading}>Due Date</TableCell>
                        <TableCell className={classes.tableHeading}>Currency</TableCell>
                        <TableCell className={classes.tableHeading}>Open Amount($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="th" scope="row">
                    {rows.map((row) => (
                        <TableRow className={classes.tableBody}>
                            <TableCell className={classes.tableRow}>{row.invoiceNumber}</TableCell>
                            <TableCell className={classes.tableRow}>{row.PONumber}</TableCell>
                            <TableCell className={classes.tableRow}>{row.invoiceDate}</TableCell>
                            <TableCell className={classes.tableRow}>{row.dueDate}</TableCell>
                            <TableCell className={classes.tableRow}>{row.currency}</TableCell>
                            <TableCell className={classes.tableRow}>{row.openAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const Template1 = () => {
    const classes = useStyles();
    return (
        <div className={classes.Body}>
            Subject: <b>Invoice Details - {"{Account Name}"}</b>
            <p>
                Dear Sir/Madam, <br/>
                Greetings! 
            </p>
            <p>
                This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department. Please find the details of the invoices below:
            </p>
            <p>
                Please find the details of the invoices below:
            </p>
            <div>
                <InvoiceDetailsTable/>
            </div>
            <p>
                Total Amount to be Paid: <b>$124.00K</b>
            </p>
            <p>
                Incase you have already made the payment for the above items, please send us the details to ensure the payment is posted.<br/>
                Let us know if we can be of any further assistance. Looking forward to hearing from you.
            </p>
            <p>
                Kind Regards,<br/>
                <b>[Sender's First Name][Sender's Last Name]</b><br/>
                Phone: <b>[Sender's contact number]</b><br/>
                Fax: <b>[If any]</b><br/>
                Email: <b>[Sender's Email Address]</b><br/>
                Company Name: <b>[Sender's Company Name]</b>
            </p>
        </div>
    )
}

const Template2 = () => {
    const classes = useStyles();
    return(
        <div className={classes.Body}>
            Subject: <b>Invoice Details - {"{Account Name}"}</b>
            <p>
                Dear Sir/Madam,
            </p>
            <p>
                Gentle reminder that you have one or more open invoices on your account. <br/>
                Please get back to us with an expected date of payment. If you have any issue with the invoice(s), please let us know so that we can aderess it at the earliest.
            </p>
            <p>
                Please find the details of the invoices below:
            </p>
            <div>
                <InvoiceDetailsTable/>
            </div>
            <p>
                Incase you have already made the payment for the above items, please send us the details to ensure the payment is posted.<br/>
                Let us know if we can be of any further assistance. Looking forward to hearing from you.
            </p>
            <p>
                Kind Regards,<br/>
                <b>[Sender's First Name][Sender's Last Name]</b><br/>
                Phone: <b>[Sender's contact number]</b><br/>
                Fax: <b>[If any]</b><br/>
                Email: <b>[Sender's Email Address]</b><br/>
                Company Name: <b>[Sender's Company Name]</b>
            </p>
        </div>
    )
}

const Window = () => {
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(true);
    const [ maxWidth ] = React.useState('lg');
    const [ fullWidth ] = React.useState(false);
    const [ template, setTemplate ] = React.useState('Template 1');

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (event) => {
        setTemplate(event.target.value);
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth={maxWidth} fullWidth={fullWidth} classes={{ paper: classes.dialogPaper }}>
            <MuiDialogTitle className={classes.WindowHeader} >
                <div style={{ display: 'flex', paddingTop: '5px' }}>
                    <div className={classes.Title}>
                        View Correspondence (2)
                    </div>
                    <div className={classes.TopRightMenu} >
                        <div className={classes.ViewText}>
                            View:
                        </div>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '30px' }}>
                            <Select 
                                className={classes.Dropdown} 
                                disableUnderline={true}
                                onChange={handleChange}
                                value={template}
                            >
                                <MenuItem value="Template 1">
                                    <div>Template 1</div>
                                </MenuItem>
                                <MenuItem value="Template 2">
                                    Template 2
                                </MenuItem>
                            </Select>
                        </div>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
            </MuiDialogTitle>
            <MuiDialogContent className={classes.Body}>
                {template == 'Template 1' ? <Template1/> : <Template2/>}
            </MuiDialogContent>
            <MuiDialogActions style={{ background: '#2A3E4C', borderRadius: '0px 0px 10px 10px' }}>
                <div style={{ paddingRight: '20px' }}>
                    <Button autofocus onClick={handleClose} className={classes.CancelButton}>Cancel</Button>
                </div>
                <div style={{ paddingRight: '20px' }}>
                    <Button autofocus className={classes.DownloadButton}>Download</Button>
                </div>
            </MuiDialogActions>
        </Dialog>
    )
}

const ViewCorrespondencePage = () => {
    return (
        <div >
            <Window/>
        </div>
    );
}

export default ViewCorrespondencePage;