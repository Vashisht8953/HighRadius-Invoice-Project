import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as ABCLogo } from '../assets/companyLogo.svg';
import { ReactComponent as HRCLogo } from '../assets/hrcLogo.svg';
import { pxToRem } from '../utils/theme';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { AppBar, Toolbar, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    LandingPage: {
        display: 'flex',
        flexDirection: 'column',
        // border: '10px solid black',
    },
    Header: {
        display: 'flex',
        paddingBlock: '5px',
    },
    ABCContainer: {
        display: 'flex',
    },
    ABCLogo: {
        top: pxToRem('20px'),
        left: pxToRem('30px'),
        width: pxToRem('44px'),
        height: pxToRem('46px'),
        paddingLeft: '5px',
        // paddingTop: pxToRem('10px'),
        // background: '#CD7925 0% 0% no-repeat padding-box',
    },
    ABCText: {
        font: 'Futura PT',
        fontSize: '39px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingLeft: '10px',
        verticalAlign: 'center',
        // display: 'flex',
    },
    HRCLogo: {
        position: 'absolute',
        top: '0%',
        width: '100%',
        textAlign: 'center',
        paddingBlock: '10px',
    },
    InvoiceList: {
        font: 'Ubuntu',
        fontSize: '20px',
        color: '#FFFFFF',
        paddingInline: '10px',
        paddingTop: '5px',
        paddingBottom: '10px',
        // top: '100px',
        // left: '30px',
        // width: '141px',
        // height: '31px',
    },
    InvoiceTable: {
        // display: 'flex',
        // flexDirection: 'column',
        // top: '20%',

        // top: '161px',
        // left: '30px',
        // width: '90%',
        // height: '759.991px',
        // border: '10px solid black',
        // border: '10px solid black',
    },
    ToolBar: {
        // top: '2s0%',
        display: 'flex',
        // width: '1603.620px',
        // width: '80%',
        // position: 'static',
        background: '#273D49CC',
    },
    DataTable: {
        // width: '99%',
        // border: '10px solid black',
        paddingLeft: '20px',
        // padding
    },
    tableHeading: {
        backgroundColor: '#273D49CC',
        color: '#97A1A9',
        fontSize: '15px',
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
        fontSize: '16px',
    },
    tableRow: {
        color: '#FFFFFF',
        borderBottom: 'none',
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.Header}>
            <div className={classes.ABCContainer}>
                <div className={classes.ABCLogo}>
                    <ABCLogo/> 
                </div>
                <div className={classes.ABCText}>
                    ABC Products
                </div>
            </div>
            <div className={classes.HRCLogo}>
                <HRCLogo/>
            </div>
        </div>
    )
}

function createData(customerName, customerNumber, invoiceNumber, invoiceAmount, dueDate, predictedPaymentDate, predictedAgingBucket, notes) {
    return { customerName, customerNumber, invoiceNumber, invoiceAmount, dueDate, predictedPaymentDate, predictedAgingBucket, notes };
}

const rows = [
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Jessica Joe', 3523312, 54723243652, '1.87K', '15-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Teresa Hawkins', 9888757, 76531467365, '22.87K', '03-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Dominic White', 4523426, 57635634655, '55.70K', '22-Mar-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Jessica Joe', 3523312, 54723243652, '1.87K', '15-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Teresa Hawkins', 9888757, 76531467365, '22.87K', '03-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Dominic White', 4523426, 57635634655, '55.70K', '22-Mar-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Jessica Joe', 3523312, 54723243652, '1.87K', '15-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Teresa Hawkins', 9888757, 76531467365, '22.87K', '03-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Dominic White', 4523426, 57635634655, '55.70K', '22-Mar-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Jessica Joe', 3523312, 54723243652, '1.87K', '15-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Teresa Hawkins', 9888757, 76531467365, '22.87K', '03-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
    createData('Dominic White', 4523426, 57635634655, '55.70K', '22-Mar-2021', '--', '--', 'Lorem Ipsum dolor...'),
];

const DataTable = (props) => {
    const classes = useStyles();
    return (
        <TableContainer style={{ height: 600, width: 1573.620 }}>
            <Table className={classes.DataTable} stickyHeader aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeading}>Customer Name</TableCell>
                        <TableCell className={classes.tableHeading}>Customer #</TableCell>
                        <TableCell className={classes.tableHeading}>Invoice #</TableCell>
                        <TableCell className={classes.tableHeading} align="right">Invoice Amount</TableCell>
                        <TableCell className={classes.tableHeading} align="right">Due Date</TableCell>
                        <TableCell className={classes.tableHeading} align="right">Predicted Payment Date</TableCell>
                        <TableCell className={classes.tableHeading}>Predicted Aging Bucket</TableCell>
                        <TableCell className={classes.tableHeading}>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="th" scope="row">
                    {rows.map((row) => (
                        <TableRow className={classes.tableBody}>
                            <TableCell className={classes.tableRow} align="left">{row.customerName}</TableCell>
                            <TableCell className={classes.tableRow} align="left">{row.customerNumber}</TableCell>
                            <TableCell className={classes.tableRow} align="left">{row.invoiceNumber}</TableCell>
                            <TableCell className={classes.tableRow} align="right">{row.invoiceAmount}</TableCell>
                            <TableCell className={classes.tableRow} align="right">{row.dueDate}</TableCell>
                            <TableCell className={classes.tableRow} align="right">{row.predictedPaymentDate}</TableCell>
                            <TableCell className={classes.tableRow} align="left">{row.predictedAgingBucket}</TableCell>
                            <TableCell className={classes.tableRow} align="left">{row.notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const Bar = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.ToolBar}>
            <Toolbar>
                <Button color="#97A1A9">Predict</Button>
            </Toolbar>
        </AppBar>
    )
}

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.LandingPage}>
            <div>
                <Header/>
            </div>
            <div className={classes.InvoiceList}>
                Invoice List
            </div>
            <div className={classes.InvoiceTable}>
                <div>
                    {/* <Bar/> */}
                </div>
                <div>
                    <DataTable/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;