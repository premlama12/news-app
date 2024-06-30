import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=da00831589a24119a7596f8e9fc9e1cc";
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Latest News </h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} 
            description={element.description?element.description.slice(0,88):""} 
            imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}
