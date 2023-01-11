import React, { ChangeEvent } from "react";

import { Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import { CategoryStyle } from './index.style'

type Props = {
    categories: string[],
    sum: Number,
    selectedCategory: string,
    setSelectedCategory: Function
}

const CategoryComponent: React.FC<Props> = ({ categories, sum, selectedCategory, setSelectedCategory }) => {

    const onSelected = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <CategoryStyle>
            <Select value={selectedCategory} onChange={onSelected} style={{ marginRight: "40px" }}>
                <MenuItem value="all">All</MenuItem>
                {categories && categories.map((item, index) => (
                    <MenuItem value={item} key={index}>{item}</MenuItem>
                ))}
            </Select>
            {"Sum:  "}{sum.toString()}
        </CategoryStyle>
    )
}

export default CategoryComponent;