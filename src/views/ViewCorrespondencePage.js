import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Button, Select, MenuItem } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { CloseIcon } from '../assets';

const useStyles = makeStyles((theme) => ({
    WindowHeader: {
        background: '#2A3E4C',
        borderRadius: '10px 10px 0px 0px',
        width: window.innerWidth - 160,
        position: 'static',
    },
    Title: {
        color: '#FFFFFF',        
    },
    TopRightMenu: {
        broder: '2px solid white',
        position: 'fixed',
        right: '100px',
        display: 'flex'
    },
    CloseButton: {
        paddingLeft: '0px',
        paddingRight: '0px',
        width: '25px',
        height: '25px',
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
        paddingTop: '18px', 
        paddingRight: '15px',
        letterSpacing: '0.33px',
        color: '#C0C6CA',
    },
    Window: {
        width: window.innerWidth - 160,
        height: window.innerHeight - 320,
        borderRadius: '0px 0px 10px 10px',
        background: '#2A3E4C',
    },
    Body: {
        fontSize: '15px',
        color: '#97A1A9',
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
}));

const WindowHeader = () => {
    const classes = useStyles();
    const [ template, setTemplate ] = React.useState('');
    const handleChange = (event) => {
        setTemplate(event.target.value);
    }
    return (
        <AppBar className={classes.WindowHeader}>
            <Toolbar>
                <div className={classes.Title}>
                    View Correspondence (2)
                </div>
                <div className={classes.TopRightMenu}>
                    <div className={classes.ViewText}>
                        View:
                    </div>
                    <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <Select 
                            className={classes.Dropdown} 
                            disableUnderline={true}
                            onChnage={handleChange}
                            defaultValue={"Template 1"}
                            // value={template}
                        >
                            <MenuItem value="Template 1">
                                <div>Template 1</div>
                            </MenuItem>
                            <MenuItem value="Template 2">
                                Template 2
                            </MenuItem>
                        </Select>
                    </div>
                    <div style={{ paddingTop: '17px', paddingBottom: '10px', paddingLeft: '20px' }}>
                        <Button className={classes.CloseButton}><CloseIcon/></Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

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

const Window = () => {
    const classes = useStyles();
    return (
        <Card className={classes.Window}>
            <CardContent className={classes.Body}>
                Subject: <b>Invoice Details - {"{Account Name}"}</b>
                <p>
                    Dear Sir/Madam, Greetings! This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department. Please find the details of the invoices below:
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
            </CardContent>
        </Card>
    );
}

const ViewCorrespondencePage = () => {
    return (
        <div>
            <div style = {{ paddingLeft: '80px', paddingTop: '80px' }}>
                <WindowHeader/>
            </div>
            <div style = {{ paddingLeft: '80px' }}>
                <Window/>
            </div>
        </div>
    );
}

export default ViewCorrespondencePage;