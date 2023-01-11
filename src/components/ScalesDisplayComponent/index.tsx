import React from "react";

import Scale from "../../models/Scale";

type Props = {
    scales: Scale[],
    categories: string[],
    selectedCategory: string,
    setSelectedCategory: Function
}

const ScalesDisplayComponent: React.FC<Props> = ({ scales, categories, selectedCategory, setSelectedCategory }) => {

    const onSelected = (event: any) => {
        setSelectedCategory(event.target.value)
    }

    return (
        <>
            <select name="category" onChange={onSelected} value={selectedCategory}>
                <option value="all">All</option>
                {categories.map((item, index) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Product Id</th>
                        <th>Weight</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {scales && scales.map((item, index) => (
                        <tr key={index}>
                            <th>{item.date}</th>
                            <th>{item.productId}</th>
                            <th>{item.weight.toString()}</th>
                            <th>{item.unit}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ScalesDisplayComponent;