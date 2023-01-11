import React, { ChangeEvent } from "react";

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
        <>
            <select name="category" onChange={onSelected} value={selectedCategory}>
                <option value="all">All</option>
                {categories.map((item, index) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            {"Sum:  "}{sum.toString()}
        </>
    )
}

export default CategoryComponent;