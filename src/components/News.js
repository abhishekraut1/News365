import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capatalizeFirstLetter = (text)=>{
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateNews = async ()=>{
         props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        // console.log(articles);
        props.setProgress(30);
        let parsedData = await data.json() 
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        
        props.setProgress(100);
    }

    useEffect(() => {
      document.title = `${capatalizeFirstLetter(props.category)} - NEWS365`;
      updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.category]) 


    const fetchMoreData = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    return (
        <>
        <h1 className='text-center' style={{margin:'35px 0' , marginTop: '90px'}}>Top {props.category==="general" ? "" : capatalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}

         {!(articles === undefined) && <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
            {articles.map((element)=>{
                return  <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title} imageUrl={element.urlToImage?element.urlToImage:"https://www.nj.com/resizer/4KXe4CfoyoSw9wulJZDskUQnXTY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/YWB7MF2NZ5HRXGH4SFZHWMXMA4.jpg"} newsUrl={element.url} description={element.description} author={element.author} date={element.publishedAt} source={element.source.name}/> 
                </div>
            })}
        </div>
        </div>
        </InfiniteScroll>}

        {(articles === undefined) && <div id="nodata" style={{display: 'flex',justifyContent: "center", fontSize: '30px', margin: "10rem 0", color: '#173e43'}}>
            <div >NO DATA</div>
        </div>}
      </>
    )
}

News.defaultProps = {
    country : "in",
    pageSize : 8,
    category : 'general'
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
}

export default News