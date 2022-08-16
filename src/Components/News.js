import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

    static defaultProps = {
        country: "in",
        category: "general"
    }

    articles = [
        
    ]

    capitalizeWord = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props){
        super(props);
        this.state = {
           articles: this.articles,
           loading: false,
           page: 1,
           pageSize: 20
        }
        document.title = `${this.capitalizeWord(this.props.category)} - News`
    }

    async componentDidMount(){
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=20`
        this.setState({loading: true})
        let data = await fetch(url)
        
        let parsedData = await data.json()
        
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false})
    }

    handelPreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=20`
        this.setState({loading: true})
        let data = await fetch(url)
        
        let parsedData = await data.json()
       
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading: false
        })
        
    }

    handelNextClick = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=20`
            this.setState({loading: true})
            let data = await fetch(url)
           
            let parsedData = await data.json()
           
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles,
                loading: false
            })
        }
       
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2 className='text-center'>News - Top Headlines from {this.capitalizeWord(this.props.category)} category</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element)=>{
                            return  <div className="col-md-4"  key={element.url}>
                                        <NewsItem title={element.title} description={element.description} Imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>
                        })}
                        
                        {/* <div className="col-md-4">
                            <NewsItem title="Cricket" description="This is cricket news" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Cricket" description="This is cricket news" />
                        </div> */}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handelPreviousClick}>Previous</button>
                        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-primary" onClick={this.handelNextClick}>Next</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default News
