import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-111364218,width-1070,height-580,imgsize-18652,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
