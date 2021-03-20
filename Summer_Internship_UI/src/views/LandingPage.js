import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { ABCLogo, HRCLogo, SearchIcon, EditIcon } from '../assets'
import { pxToRem } from '../utils/theme';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@material-ui/core';
import { AppBar, Toolbar, Button, Input, InputAdornment, Checkbox } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AddInvoicePage, DeleteInvoicePage, EditInvoicePage, ViewCorrespondencePage } from './index.js';

const useStyles = makeStyles((theme) => ({
    LandingPage: {
        display: 'flex',
        flexDirection: 'column',
        // border: '1px solid black',
    },
    Header: {
        display: 'flex',
        paddingBlock: '5px',
        width: 1553.620,
        // paddinLeft: '20px'
        // border: '2px solid black',
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
        opacity: 1,
        fill: '#CD7925',
        // background: '#CD7925',
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
        // width: '100%',
        textAlign: 'center',
        paddingBlock: '10px',
        // border: '2px solid black',
        width: window.innerWidth - 40,
    },
    InvoiceList: {
        font: 'Ubuntu',
        fontSize: '20px',
        color: '#FFFFFF',
        // paddingInline: '10px',
        paddingTop: '10px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        width: '120px',
        // top: '100px',
        // left: '30px',
        // width: '141px',
        // height: '31px',
        // paddingLeft: '40px'
    },
    InvoiceTable: {
        // display: 'flex',
        // flexDirection: 'column',
        // top: '20%',
        // border: '10px solid black',
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
        // height: 600, 
        // width: 1553.620,
        width: window.innerWidth - 40,
        position: 'static',
        background: '#273D49CC',
        boxShadow: 'none', 
        borderBottom: 'none',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    TableBox: {
        width: window.innerWidth - 40,
        background: '#273D49CC',
        paddinLeft: '20px',
        paddingBottom: '20px',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    DataTable: {
        width: window.innerWidth - 80,
        // border: '10px solid black',
        paddingLeft: '20px',
        paddingBottom: '20px',
        opacity: 1,
        // padding
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
        "&$selected, &$selected:hover": {
            backgroundColor: '#2A5368'
        },
        borderRadius: 10,
    },
    hover: {},
    selected: {},
    tableRow: {
        color: '#FFFFFF',
        borderBottom: 'none',
        height: '10px',
    },
    // PredictButton: {
    //     color: '#FFFFFF',
    //     background: '#97A1A9',
    //     // font: 'Ubuntu',
    //     // fontFamily: 'normal',
    //     textTransform: 'none',
    //     paddingLeft: '10px',
    //     paddingRight: '10px',
    //     height: '45px',
    //     borderRadius: 10,
    // },
    // ViewCorrespondence: {
    //     color: '#97A1A9',
    //     background: 'transparent',
    //     border: '1px solid #97A1A9',
    //     borderRadius: 10,
    //     textTransform: 'none',
    //     height: '45px',
    // },
    searchByInvoiceNumber: {
        color: '#97A1A9',
        borderBottom: 'none',
        border: '1px solid #356680',
        background: '#283A46',
        borderRadius: 10,
        paddingLeft: '10px',
        paddingRight: '10px',
        disableUnderline: true,
        height: '45px',
        borderBottom: '1px solid #356680',
        width: '340px',
    },
    // DeleteButton: {
    //     color: '#97A1A9',
    //     border: '1px solid #97A1A9',
    //     borderRadius: 10,
    //     textTransform: 'none',
    //     height: '45px',
    //     padding: '15px'
    // },
    // EditButton: {
    //     color: '#97A1A9',
    //     border: '1px solid #97A1A9',
    //     borderRadius: 10,
    //     textTransform: 'none',
    //     height: '45px',
    //     padding: '15px',
    // },
    Button: {
        color: '#FFFFFF',
        border: '1px solid #14AFF1',
        borderRadius: 10,
        textTransform: 'none',
        height: '45px',
        padding: '15px',
    },
    checkbox: {
        root: {
            color: '#14AFF1',
            '&$checked': {
                color: '#14AFF1',
            },
        },
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
            </div>
            <div className={classes.HRCLogo}>
                <HRCLogo/>
            </div>
        </div>
    )
}

const DataTable = (props) => {
    const classes = useStyles();
    const [ data, setData ] = React.useState([]);
    const [ isNext, setNext ] = React.useState(false);
    let [ pageCount, setPageCount ] = React.useState(0);
    const [ selected, setSelected ] = React.useState([]);

    const loadMoreData = () => {
        setPageCount(pageCount + 1);
    }

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = data.map(n => n['doc_id']);
            setSelected(newSelecteds);
        }
        else {
            setSelected([]);
        }
        console.log(selected);
    };

    const handleClick = (event, doc_id) => {
        const selectedIndex = selected.indexOf(doc_id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, doc_id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
          );
        }

        setSelected(newSelected);

        console.log(selected);
    };

    const isSelected = (doc_id) => selected.indexOf(doc_id) !== -1;

    React.useEffect(() => {
        if(pageCount !== -1) {
            setNext(true);
            axios.get(`http://localhost:8080/1830196/SendData?page=${pageCount}`)
            .then((response) => {
                setData((prev) => [...prev, ...response.data]);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }, [pageCount]);

    return (
        <div style={{ paddingLeft: '20px' }}>
            <div className={classes.TableBox}>
                <TableContainer id="data-table" style={{ height: (window.innerHeight - 230), width: (window.innerWidth - 60), overflow: 'scroll', overflowX: 'hidden' }}>
                    <InfiniteScroll
                        scrollableTarget="data-table"
                        dataLength={data.length}
                        hasMore={isNext}
                        next={loadMoreData}
                        loader={
                            <div style={{ width: '100px', height: '100px', margin: 'auto'}}>
                                <CircularProgress/>
                            </div>
                        }
                    >
                        <Table className={classes.DataTable} stickyHeader aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            indeterminate={selected.length > 0 && selected.length < data.length}
                                            checked={data.length > 0 && selected.length === data.length}
                                            onChange={handleSelectAllClick}
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                            // className={classes.tableHeading}
                                            className={classes.checkbox}
                                            disableRipple={true}
                                            size='small'
                                            // iconStyle={{ fill: '#14AFF1' }}
                                            // style={{
                                            //     root: {
                                            //         "&$checked": {
                                            //             color: '#14AFF1',
                                            //         }
                                            //     }
                                            // }}
                                        />
                                    </TableCell>
                                    {/* {data[0] &&
                                        Object.keys(data[0]).map((cellName) => (
                                            <TableCell key={cellName} className={classes.tableHeading}>{cellName}</TableCell>
                                        ))
                                    } */}
                                    <TableCell key={'name_custoemr'} className={classes.tableHeading}>Customer Name</TableCell>
                                    <TableCell key={'cust_number'} className={classes.tableHeading}>Customer #</TableCell>
                                    <TableCell key={'doc_id'} className={classes.tableHeading}>Invoice #</TableCell>
                                    <TableCell key={'total_open_amount'} className={classes.tableHeading}>Invoice Amount</TableCell>
                                    <TableCell key={'due_in_date'} className={classes.tableHeading}>Due Date</TableCell>
                                    <TableCell key={'clear_date'} className={classes.tableHeading}>Predicted Payment Date</TableCell>
                                    <TableCell key={'predicted_aging_bucket'} className={classes.tableHeading}>Predicted Aging Bucket</TableCell>
                                    <TableCell key={'notes'} className={classes.tableHeading}>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody component="th" scope="row">
                                {data.map((row) => {
                                    const isItemSelected = isSelected(row['doc_id']);
                                    
                                    return (
                                        <TableRow 
                                            className={classes.tableBody} 
                                            classes={{ hover: classes.hover, selected: classes.selected }}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isSelected(row['doc_id'])}
                                                    onClick={(event) => handleClick(event, row['doc_id'])}
                                                    className={classes.tableRow}
                                                    className={classes.checkbox}
                                                    disableRipple={true}
                                                    size='small'
                                                />
                                            </TableCell>
                                            {Object.keys(row).map((cell) => (
                                                <TableCell className={classes.tableRow}>{row[cell]}</TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </InfiniteScroll>
                </TableContainer>
            </div>
        </div>
    )
}

const Bar = ({ rowsSelected }) => {
    const classes = useStyles();
    const [ openAddInvoice, setOpenAddInvoice ] = React.useState(false);
    const [ openDeleteInvoice, setOpenDeleteInvoice ] = React.useState(false);
    const [ openEditInvoice, setOpenEditInvoice ] = React.useState(false);
    const [ openViewCorrespondence, setOpenViewCorrespondence ] = React.useState(false);

    const handleAddInvoice = () => {
        setOpenAddInvoice(true);
    }

    const handleDeleteInvoice = () => {
        setOpenDeleteInvoice(true);
    }

    const handleEditInvoice = () => {
        setOpenEditInvoice(true);
    }

    const handleViewCorrespondence = () => {
        setOpenViewCorrespondence(true);
    }

    return (
        <AppBar className={classes.ToolBar}>
            <Toolbar style={{ display: 'flex' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={classes.Button}
                            // disabled={}
                        >
                            Predict
                        </Button>
                    </div>
                    <div style={{ paddingRight: '10px', paddingTop: '10px', }}>
                        <Button 
                            className={classes.Button} 
                            onClick={handleViewCorrespondence}
                        >
                            View Correspondence
                        </Button>
                        <ViewCorrespondencePage open={openViewCorrespondence} setOpen={setOpenViewCorrespondence}/>
                    </div>
                </div>
                <div style={{ position: 'fixed', right: 40, display: 'flex' }}>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={classes.Button} 
                            onClick={handleAddInvoice}
                        >
                            + Add
                        </Button>
                        <AddInvoicePage open={openAddInvoice} setOpen={setOpenAddInvoice}/>
                    </div>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={classes.Button} 
                            onClick={handleEditInvoice}
                        >
                            <EditIcon style={{ paddingRight: '10px' }}/>
                            Edit
                        </Button>
                        <EditInvoicePage open={openEditInvoice} setOpen={setOpenEditInvoice}/>
                    </div>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={classes.Button} 
                            onClick={handleDeleteInvoice}
                        >
                            — Delete
                        </Button>
                        <DeleteInvoicePage open={openDeleteInvoice} setOpen={setOpenDeleteInvoice}/>
                    </div>
                    <div style={{ paddingTop: '10px', }}>
                        <Input
                            className={classes.searchByInvoiceNumber}
                            placeholder='Search by Invoice Number'
                            disableUnderline={true}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <SearchIcon/>
                                </InputAdornment>
                            }
                        ></Input>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.LandingPage}>
            <div style={{paddingLeft: '20px'}}>
                <Header/>
            </div>
            <div className={classes.InvoiceList}>
                Invoice List
            </div>
            <div className={classes.InvoiceTable}>
                <div style={{ paddingLeft: '19px' }}>
                    <Bar/>
                </div>
                <div>
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;