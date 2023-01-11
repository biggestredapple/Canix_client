import React, { ChangeEvent } from "react";

import { CategoryStyle } from './index.style'

type Props = {
    categories: string[],
    sum: Number,
    selectedCategory: string,
    setSelectedCategory: Function
}

const CategoryComponent: React.FC<Props> = ({ categories, sum, selectedCategory, setSelectedCategory }) => {

    const onSelected = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <CategoryStyle>
            <select name="category" onChange={onSelected} value={selectedCategory}>
                <option value="all">All</option>
                {categories && categories.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
            {"Sum:  "}{sum.toString()}
        </CategoryStyle>
    )
}

export default CategoryComponent;