import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description,Imageurl,newsurl,author,date} = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={Imageurl?Imageurl:"https://images.livemint.com/img/2021/12/28/600x338/ee533a00-38df-11ec-9de8-7f7cc13130d0_1640310465772_1640654102799.jpg"} height={"250px"} width={"500px"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
