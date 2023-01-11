import Scale from "../../models/Scale";

// import mui components
import { Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

type Props = {
    scales: Scale[],
}

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

const TableComponent: React.FC<Props> = ({ scales }) => {

    return (
        <>
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
                        {scales && scales.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {row.date}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.product_id}</StyledTableCell>
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

export default TableComponent;