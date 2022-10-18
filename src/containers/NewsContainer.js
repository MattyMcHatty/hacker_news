import React, {useState, useEffect} from "react";
import NewsArticles from "../components/NewsArticles";

const NewsContainer = () => {

    const [articles, setArticles ] = useState( [] )

    useEffect( () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then( res => res.json())
        .then( data => {
            const promises = data.map((data) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${data}.json `)
                .then(res => res.json())
            });

            Promise.all(promises)
            .then((data) => {
                setArticles(data);
            })
        })
    }, [])

    
    return(
        <div>
            <NewsArticles articles={articles} />
        </div>
    )






};

export default NewsContainer;


