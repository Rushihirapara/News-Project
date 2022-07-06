import React from 'react'

const NewsItem = (props)=> {
  
    
   
         let {titel ,description,imageUrl,newsurl,date ,author,source }=props;
        return (
            <div>
                <div className="card" >
                    <div style={{display:'flex',
                                justifyContent:'flex-end',
                                position:'absolute',
                                right:0}}>

                <span className=" badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl?"https://www.thoughtco.com/thmb/MC0Nl4yLSdUBGmYlOmXMW1zZw4o=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-871479424-f599f96e1c03466880bfc5be20aeb201.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {titel}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="text-success">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
                        <a rel="noreferrer" href={newsurl} target='_blank'  className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
