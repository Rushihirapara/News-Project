import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spnnir from './Spnnir';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = ( props)=> {
    const[articles, setArticles] = useState([])
    const[loading, setLoading] = useState(true)
    const[page, setPage] = useState(1)
    const[totalResults, setTotalResults] = useState(0)
const  UpdateNews= async()=> {
    //console.log("cdm");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page}&pagesize=${props.PageSige}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedata = await data.json()
    // console.log(parsedata);
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
    setLoading(false)
    }
  
   useEffect(()=>{
     
   document.title = `${props.category}- NewsMonkey`;
    UpdateNews(); 
     // eslint-disable-next-line
  },[ ])


 
  
//   const handelPrevClick = async () => {
//     //  console.log("previous")  
//     //  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=965a640ae4f94da785c3bcebc0bd0af0&page=${page - 1}&pagesize=${props.pagesize}`;
// //    setLoading(true)

//     //  let data = await fetch(url);
//     //  let parsedata = await data.json()
//     //  console.log(parsedata);
//     //  this.setState({
//     // page: this.state.page -1,
//     // articles:parsedata.articles,
//     // loading:false
//     setPage(page - 1)
//     UpdateNews();
//   }


//   const handelNextClick = async () => {
//     //   console.log("next")   
//     //   if  (!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pagesize))){


//     //   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=965a640ae4f94da785c3bcebc0bd0af0&page=${this.state.page + 1}&pagesize=${props.pagesize}`;
//     //   this.setState({loading:true});
//     //   let data = await fetch(url);
//     //   let parsedata = await data.json()
//     //   console.log(parsedata);


//     //   this.setState({
//     //  page: this.state.page +1,
//     //  articles:parsedata.articles,
//     //  loading:false
//     setPage(page + 1)
//     UpdateNews();
//   }
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page + 1)
    
    let data = await fetch(url);
    let parsedata = await data.json()
    // console.log(parsedata);
    setArticles(articles.concat(parsedata.articles))
    setLoading(false)
    setTotalResults(parsedata.totalResults)

   
    }
  

  
    return (
      < >

        <h2 className='my-5 text-center' style={{margine:'35px',marginTop:'90px'}}>Newsmonkey-Top {props.category} headlines</h2>
        {loading && <Spnnir />}
        <InfiniteScroll  
          dataLength={articles.length}
          next={fetchMoreData}

          hasMore={articles.length !== totalResults}
          loader={<Spnnir />}>

          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem titel={element.titel}
                   description={element.description} 
                   imageUrl={element.urlToImage} 
                   newsurl={element.url} 
                   author={element.author}
                    date={element.publishedAt} 
                    source={element.source.name}/>
                </div>

              })}

            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
      <button type="button"disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handelPrevClick}>&larr; Previous</button>
      <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pagesize))} className="btn btn-dark" onClick={this.handelNextClick}>Next&rarr;</button>
      </div> */}
      </>
    )
  
    
      // eslint-disable-next-line
      News.defaultProps = {
        country: 'in',
        pagesize: 8,
        category: 'general'
      }
      News.propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
      }
}
export default News
