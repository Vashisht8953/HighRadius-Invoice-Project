import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { ABCLogo, HRCLogo, SearchIcon, EditIcon } from '../assets'
import { pxToRem } from '../utils/theme';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress } from '@material-ui/core';
import { AppBar, Toolbar, Button, Input, InputAdornment, Checkbox } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AddInvoicePage, DeleteInvoicePage, EditInvoicePage, ViewCorrespondencePage } from '../views';

const useStyles = makeStyles((theme) => ({
    LandingPage: {
        display: 'flex',
        flexDirection: 'column',
    },
    Header: {
        display: 'flex',
        paddingBlock: '5px',
        width: 1553.620,
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
    },
    ABCText: {
        font: 'Futura PT',
        fontSize: '39px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingLeft: '10px',
        verticalAlign: 'center',
    },
    HRCLogo: {
        position: 'absolute',
        top: '0%',
        textAlign: 'center',
        paddingBlock: '10px',
        width: window.innerWidth - 40,
    },
    InvoiceList: {
        font: 'Ubuntu',
        fontSize: '20px',
        color: '#FFFFFF',
        paddingTop: '10px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        width: '200px',
    },
    ToolBar: {
        display: 'flex',
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
        paddingLeft: '20px',
        paddingBottom: '20px',
        opacity: 1,
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
    Button: {
        color: '#FFFFFF',
        border: '1px solid #14AFF1',
        borderRadius: 10,
        textTransform: 'none',
        height: '45px',
        padding: '15px',
    },
    DisabledButton: {
        color: '#97A1A9',
        border: '1px solid #97A1A9',
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

const DataTable = ({
    data, setData,
    selected, setSelected,
    searchKeyword, searchResults,
    searchPageCount, setSearchPageCount,
    dataPageCount, setDataPageCount
}) => {
    const classes = useStyles();
    const [ isNext, setNext ] = React.useState(false);

    const loadMoreData = () => {
        if(viewSearchResults) {
            setSearchPageCount(searchPageCount + 1);
            if(dataPageCount !== 0) {
                setDataPageCount(0);
            }
        }
        else {
            setDataPageCount(dataPageCount + 1);
            if(searchPageCount !== 0) {
                setSearchPageCount(0);
            }
        }
    }

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = data.map(n => n['doc_id']);
            setSelected(newSelecteds);
        }
        else {
            setSelected([]);
        }
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
    };

    React.useEffect(() => {
        if(dataPageCount !== -1) {
            setNext(true);
            axios.get(`http://localhost:8080/1830196/SendData?page=${dataPageCount}`)
            .then((response) => {
                setData((prev) => [...prev, ...response.data]);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }, [ dataPageCount ]);

    const isSelected = (doc_id) => selected.indexOf(doc_id) !== -1;
    const dataLength = data === undefined ? 0 : data.length;
    const selectedLength = selected === undefined ? 0 : selected.length;
    const searchResultsLength = searchResults === undefined ? 0 : searchResults.length;
    const viewSearchResults = searchKeyword !== '';

    return (
        <div style={{ paddingLeft: '20px' }}>
            <div className={classes.TableBox}>
                <TableContainer id="data-table" style={{ height: (window.innerHeight - 230), width: (window.innerWidth - 60), overflow: 'scroll', overflowX: 'hidden' }}>
                    <InfiniteScroll
                        scrollableTarget="data-table"
                        dataLength={viewSearchResults ? searchResultsLength : dataLength}
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
                                            indeterminate={selectedLength > 0 && selectedLength < dataLength}
                                            checked={dataLength > 0 && selectedLength === dataLength}
                                            onChange={handleSelectAllClick}
                                            inputProps={{ 'aria-label': 'select all desserts' }}
                                            className={classes.checkbox}
                                            disableRipple={true}
                                            size='small'
                                        />
                                    </TableCell>
                                    <TableCell key={'name_custoemr'} className={classes.tableHeading}>Customer Name</TableCell>
                                    <TableCell key={'cust_number'} className={classes.tableHeading}>Customer #</TableCell>
                                    <TableCell key={'doc_id'} className={classes.tableHeading}>Sales Order #</TableCell>
                                    <TableCell key={'total_open_amount'} className={classes.tableHeading} align="right">Sales Order Amount</TableCell>
                                    <TableCell key={'due_in_date'} className={classes.tableHeading} align="right">Due Date</TableCell>
                                    <TableCell key={'clear_date'} className={classes.tableHeading} align="right">Predicted Payment Date</TableCell>
                                    <TableCell key={'predicted_aging_bucket'} className={classes.tableHeading}>Predicted Aging Bucket</TableCell>
                                    <TableCell key={'notes'} className={classes.tableHeading}>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody component="th" scope="row">
                                {(searchKeyword === '' ? data : searchResults).map((row) => {
                                    const isItemSelected = isSelected(row['doc_id']);
                                    return (
                                        <TableRow 
                                            className={classes.tableBody} 
                                            classes={{ hover: classes.hover, selected: classes.selected }}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    onClick={(event) => handleClick(event, row['doc_id'])}
                                                    className={classes.tableRow}
                                                    className={classes.checkbox}
                                                    disableRipple={true}
                                                    size='small'
                                                />
                                            </TableCell>
                                            <TableCell className={classes.tableRow}>{row['name_customer']}</TableCell>
                                            <TableCell className={classes.tableRow}>{row['cust_number']}</TableCell>
                                            <TableCell className={classes.tableRow}>{row['doc_id']}</TableCell>
                                            <TableCell className={classes.tableRow} align="right">{row['total_open_amount']}</TableCell>
                                            <TableCell className={classes.tableRow} align="right">{row['due_in_date']}</TableCell>
                                            <TableCell className={classes.tableRow} align="right">{row['clear_date'] === '' || row['clear_date'] === null ? '--' : row['clear_date']}</TableCell>
                                            <TableCell className={classes.tableRow}>--</TableCell>
                                            <TableCell className={classes.tableRow}>{row['notes'] === null ? '--' : row['notes']}</TableCell>
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

const Bar = ({ 
    data, setData,
    selected, setSelected,
    searchKeyword, setSearchKeyword,
    searchResults, setSearchResults,
    searchPageCount, setSearchPageCount,
    setDataPageCount
 }) => {
    const classes = useStyles();
    const [ openAddInvoice, setOpenAddInvoice ] = React.useState(false);
    const [ openDeleteInvoice, setOpenDeleteInvoice ] = React.useState(false);
    const [ openEditInvoice, setOpenEditInvoice ] = React.useState(false);
    const [ openViewCorrespondence, setOpenViewCorrespondence ] = React.useState(false);

    const [ selectedInvoiceDetails, setSelectedInvoiceDetails ] = React.useState([]);

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

    const handleSearch = (event) => {
        setSearchKeyword(event.target.value);
        setSearchPageCount(0);
        setSearchResults([]);
    }

    React.useEffect(() => {
        axios.get(`http://localhost:8080/1830196/SearchSalesOrder?searchKeyword=${searchKeyword}&page=${searchPageCount}`)
        .then((response) => {
            setSearchResults([...searchResults, ...response.data]);
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(searchKeyword)
    }, [ searchKeyword, searchPageCount ])

    React.useEffect(() => {
        setSelectedInvoiceDetails(data.filter(row => selected.indexOf(row['doc_id']) != -1));
    }, [ selected ])

    const isDisabledEditButton = (selected.length !== 1);
    const isDisabledViewCorrespondenceButton = (selected.length === 0);
    const isDisabledDeleteButton = (selected.length === 0);
    const isDisabledPredictButton = (selected.length === 0);

    return (
        <AppBar className={classes.ToolBar}>
            <Toolbar style={{ display: 'flex' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={isDisabledPredictButton ? classes.DisabledButton : classes.Button}
                            disabled={isDisabledPredictButton}
                        >
                            Predict
                        </Button>
                    </div>
                    <div style={{ paddingRight: '10px', paddingTop: '10px', }}>
                        <Button 
                            className={isDisabledViewCorrespondenceButton ? classes.DisabledButton : classes.Button} 
                            onClick={handleViewCorrespondence}
                            disabled={isDisabledViewCorrespondenceButton}
                        >
                            View Correspondence
                        </Button>
                        <ViewCorrespondencePage 
                            open={openViewCorrespondence} setOpen={setOpenViewCorrespondence}
                            selectedInvoiceDetails={selectedInvoiceDetails}
                        />
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
                        <AddInvoicePage 
                            open={openAddInvoice} setOpen={setOpenAddInvoice}
                            setDataPageCount={setDataPageCount} setData={setData}
                        />
                    </div>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={isDisabledEditButton ? classes.DisabledButton : classes.Button} 
                            onClick={handleEditInvoice}
                            disabled={isDisabledEditButton}
                        >
                            <EditIcon style={{ paddingRight: '10px' }}/>
                            Edit
                        </Button>
                        <EditInvoicePage 
                            open={openEditInvoice} setOpen={setOpenEditInvoice}
                            selectedInvoiceDetails={selectedInvoiceDetails}
                            setDataPageCount={setDataPageCount} setData={setData}
                        />
                    </div>
                    <div style={{ paddingRight: '20px', paddingTop: '10px', }}>
                        <Button 
                            className={isDisabledDeleteButton ? classes.DisabledButton : classes.Button} 
                            onClick={handleDeleteInvoice}
                            disabled={isDisabledDeleteButton}
                        >
                            — Delete
                        </Button>
                        <DeleteInvoicePage 
                            open={openDeleteInvoice} setOpen={setOpenDeleteInvoice}
                            selected={selected}
                            setDataPageCount={setDataPageCount}
                        />
                    </div>
                    <div style={{ paddingTop: '10px', }}>
                        <Input
                            className={classes.searchByInvoiceNumber}
                            placeholder='Search by Invoice Number'
                            disableUnderline={true}
                            value={searchKeyword}
                            onChange={(event) => handleSearch(event)}
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

const LandingPage = () => {
    const classes = useStyles();
    const [ data, setData ] = React.useState([]);
    const [ dataPageCount, setDataPageCount ] = React.useState(0);
    const [ selected, setSelected ] = React.useState([]);

    const [ searchKeyword, setSearchKeyword ] = React.useState('');
    const [ searchResults, setSearchResults ] = React.useState([]);
    const [ searchPageCount, setSearchPageCount ] = React.useState(0);

    return (
        <div className={classes.LandingPage}>
            <div style={{paddingLeft: '20px'}}>
                <Header/>
            </div>
            <div className={classes.InvoiceList}>
                Sales Order List
            </div>
            <div className={classes.InvoiceTable}>
                <div style={{ paddingLeft: '19px' }}>
                    <Bar
                        data={data} setData={setData}
                        selected={selected} setSelected={setSelected}
                        searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
                        searchResults={searchResults} setSearchResults={setSearchResults}
                        searchPageCount={searchPageCount} setSearchPageCount={setSearchPageCount}
                        setDataPageCount={setDataPageCount}
                    />
                </div>
                <div>
                    <DataTable
                        data={data} setData={setData}
                        selected={selected} setSelected={setSelected}
                        searchKeyword={searchKeyword} searchResults={searchResults}
                        searchPageCount={searchPageCount} setSearchPageCount={setSearchPageCount}
                        dataPageCount={dataPageCount} setDataPageCount={setDataPageCount}
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;