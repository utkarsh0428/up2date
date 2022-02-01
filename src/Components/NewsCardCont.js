import React, { useEffect, useState, useReducer } from 'react';
import { Button } from 'react-bootstrap'
import NewsCard from './NewsCard';
import Loading from './Loading';

const reducer = (state, action) => {

    switch (action.type) {
        case "Previous":
            state = state - 1
            // action.meth({ loading:true })
            console.log(state)
            return state
        case "Next":
            // console.log(state)
            state = state + 1
            console.log(action.meth)
            // console.log(state)
            return state
        default:
            console.log("defulta")
    }
}

function NewsCardCont(props) {

    let page = 1;
    const [condPage, dispatch] = useReducer(reducer, page);

    const [articleOBJ, setArticleOBJ] = useState({
        article: [],
        loading:false
    });


    useEffect(() => {
        getData();
    }, [condPage]);

    console.log(articleOBJ.loading)

    async function getData ()  {

        setArticleOBJ({...articleOBJ, loading:true })
        // console.log(articleOBJ.loading)
        const fetchData = await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=${condPage}&pageSize=6&category=${props.category}&apiKey=4bc34d3273974fe8a43f645c30f673d2`)
        const data = await fetchData.json();
        // console.log(data.articles)
        setArticleOBJ({...articleOBJ, article: data.articles,loading:false })
        // console.log(articleOBJ.loading)

    }

    console.log(articleOBJ.loading)


    return (
        <>
            {articleOBJ.loading===true && <Loading/>}
            {articleOBJ.loading===false && <><div id="cardsCont">
                {articleOBJ.article.map((elem) => {
                    return (
                        <NewsCard key={elem.title} title={elem.title} desc={elem.description} image={elem.urlToImage} moreNews={elem.url} time={elem.publishedAt} />)

                })}
            </div>
            <div id="BTNgrp" >
                <Button variant="info" id="previousBTN" disabled={condPage <= 1 ? true : false} onClick={() => dispatch({ type: "Previous" })}>Previous</Button>
                <p id="pagNo">{condPage}</p>
                <Button variant="info" id="nextBTN" onClick={() => dispatch({ type: "Next",meth:articleOBJ.loading })}>Next</Button>
            </div></>}
        </>);
}


export default NewsCardCont;

