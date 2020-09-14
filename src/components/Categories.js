import React from "react";
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

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

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600px;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === "all"}
                    to={c.name === "all" ? "/" : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;
