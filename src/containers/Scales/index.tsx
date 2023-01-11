import React, { useEffect, useState } from 'react';

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

const ScalesContainer = () => {
    const [stateMsg, setStateMsg] = useState<string>("")
    // const [categories, setCategories] = useState<string[]>([]);
    // const [scales, setScales] = useState<Scale[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    useEffect(() => { }, [])

    return (
        <div>
            <UploadComponent />
            <ScalesDisplayComponent scales={scales} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
    )
}

export default ScalesContainer;