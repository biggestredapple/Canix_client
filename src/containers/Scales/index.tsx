import React, { useEffect, useState } from 'react';

// import mui components
import { Alert } from '@mui/material';

// import components
import { UploadComponent } from '../../components';
import { TableComponent } from '../../components';
import { CategoryComponent } from '../../components';

import Scale from '../../models/Scale'

import { Fetch } from '../../utils';
import { BASE_SERVER_API_URL } from '../../config';

// const scales: Scale[] = [
//     {
//         category: "NBN",
//         date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
//         productId: "NBN-1020202",
//         weight: 2020,
//         unit: "String"
//     }, {
//         category: "NBN",
//         date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
//         productId: "NBN-1020202",
//         weight: 2020,
//         unit: "String"
//     }, {
//         category: "NBN",
//         date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
//         productId: "NBN-1020202",
//         weight: 2020,
//         unit: "String"
//     }, {
//         category: "NBN",
//         date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
//         productId: "NBN-1020202",
//         weight: 2020,
//         unit: "String"
//     }, {
//         category: "NBN",
//         date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
//         productId: "NBN-1020202",
//         weight: 2020,
//         unit: "String"
//     }, {
//         category: "NBN",
//         date: "2021 - 03 - 01 01: 30: 32.977497+00: 00",
//         productId: "NBN-1020202",
//         weight: 2020,
//         unit: "String"
//     }
//]

// const categories: string[] = [
//     "NDK",
//     "CIX",
//     "IEO"
// ]


const ScalesContainer = () => {
    const API_URL = process.env.REACT_APP_SERVER || BASE_SERVER_API_URL;

    const [stateMsg, setStateMsg] = useState<string>("")
    const [status, setStatus] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);
    const [scales, setScales] = useState<Scale[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [sum, setSum] = useState<Number>(1334);
    useEffect(() => {
        setTimeout(() => {
            setStateMsg("");
        }, 3000)
    }, [stateMsg])

    useEffect(() => {
        Fetch(`${API_URL}/categories`).then(data => {
            let res: any = data;
            setCategories(res.categories);
        });
        Fetch(`${API_URL}/scales/all`).then(data => {
            let res: any = data;
            setScales(res.scales);
            setSum(res.sum)
        });
    }, [])

    useEffect(() => {
        Fetch(`${API_URL}/categories`).then(data => {
            let res: any = data;
            setCategories(res.categories);
        });
        Fetch(`${API_URL}/scales/${selectedCategory}`).then(data => {
            let res: any = data;
            setScales(res.scales);
            setSum(res.sum)
        });
    }, [selectedCategory, status])

    const successMsg = (<Alert variant="outlined" severity="success">{stateMsg}</Alert>)
    const errorMsg = (<Alert variant="outlined" severity="error">{stateMsg}</Alert>)

    return (
        <>
            {stateMsg !== "" ? (
                status ? successMsg : errorMsg
            ) : ""}
            <UploadComponent setStateMsg={setStateMsg} setStatus={setStatus} />
            <CategoryComponent categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} sum={sum} />
            <TableComponent scales={scales} />
            {categories.length === 0 ? (
                <h1 style={{ textAlign: "center" }}>No Data</h1>
            ) : ""}
        </>
    )
}

export default ScalesContainer;