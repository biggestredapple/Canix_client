import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import components
import { UploadComponent } from '../../components';
import { ScalesDisplayComponent } from '../../components';

import Scale from '../../models/Scale'


const scales: Scale[] = [
    {
        category: "NBN",
        date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
        productId: "NBN-1020202",
        weight: 2020,
        unit: "String"
    }, {
        category: "NBN",
        date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
        productId: "NBN-1020202",
        weight: 2020,
        unit: "String"
    }, {
        category: "NBN",
        date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
        productId: "NBN-1020202",
        weight: 2020,
        unit: "String"
    }, {
        category: "NBN",
        date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
        productId: "NBN-1020202",
        weight: 2020,
        unit: "String"
    }, {
        category: "NBN",
        date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
        productId: "NBN-1020202",
        weight: 2020,
        unit: "String"
    }, {
        category: "NBN",
        date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
        productId: "NBN-1020202",
        weight: 2020,
        unit: "String"
    }
]

const categories: string[] = [
    "NDK",
    "CIX",
    "IEO"
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ScalesContainer = () => {
    const [stateMsg, setStateMsg] = useState<string>("")
    // const [categories, setCategories] = useState<string[]>([]);
    // const [scales, setScales] = useState<Scale[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    useEffect(() => { }, [])

    return (
        <>
            <UploadComponent />
            {/* <ScalesDisplayComponent scales={scales} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> */}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell align="right">ProductId</StyledTableCell>
                            <StyledTableCell align="right">Weight</StyledTableCell>
                            <StyledTableCell align="right">Unit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {scales.map((row) => (
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    {row.date}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.productId}</StyledTableCell>
                                <StyledTableCell align="right">{row.weight.toString()}</StyledTableCell>
                                <StyledTableCell align="right">{row.unit}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ScalesContainer;