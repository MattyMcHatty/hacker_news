import React from "react";

const NewsArticles = ({articles}) => {

    const articleList = articles.map((article, index) => {

        return <li key={index} value={index}>
                    <ul>
                        <li><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></li>
                        <li>By: {article.by}</li>
                        <li>Score: {article.score}</li>
                    </ul>
                </li>

    });






    return(
        <>
        {/* <form onSubmit={searchArticles} >
            <label htmlFor="new-search">Search:</label>
            <input id="new-search" type="textbox" onChange={handleSearchInput} value={searchValue} />
            <input type="submit" value="Search" />

        </form> */}

        <ul>
            {articleList}
        </ul>

        </>
    )


}

export default NewsArticles