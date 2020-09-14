import React from "react";
import styled, {css} from "styled-components";

const categories = [
    {
        name: "all",
        text: "News",
    },
    {
        name: "business",
        text: "Business",
    },
    {
        name: "entertainment",
        text: "Entertainment",
    },
    {
        name: "health",
        text: "Health",
    },
    {
        name: "science",
        text: "Science",
    },
    {
        name: "sports",
        text: "Sports",
    },
    {
        name: "technology",
        text: "Technology",
    },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%auto;
        overflow-x: auto;
    }
    border: 3px solid blue;
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    & + & {
        margin-left: 1rem;
    }
    border: 1px solid aqua;
    ${(props) =>
        props.active &&
        css`
            font-weight: 600px;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
        `}
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
