import React, { Component } from 'react'
import './post.css'

class Post extends Component {




    render() {
        return (
            <div className="post">

                {this.props.getdata.reverse().map(e => {
                    return (
                        <div className="container">
                            <div className="card mb-3">
                                <img src={e.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="text">{e.content}</p>
                                    <div className="avatar_con">
                                        <sapn className="avatar"><img src={e.url} /></sapn>
                                        <p className="card-text"><small className="text-muted">posted by {e.postedBy} </small></p>
                                    </div>
                                    <div className="footer">
                                        <p className="text"> <small className="text-muted">posted on {e.createdAt.slice(0, 10)}</small> </p>
                                        {/* <button className="btn btn-primary" onClick={event => this.props.del(e)} >Remove</button> */}
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div style={{ marginTop: "10px" }} class="form-group">

                                            <input type="text" class="form-control" placeholder="comments" />

                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Post
