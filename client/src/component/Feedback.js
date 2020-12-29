import React, { Component } from 'react'
import {toast} from 'react-toastify'

class Feedback extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             comment:""
        }
    }

    handleChange = event =>{
        this.setState({comment:event.target.value})
    }

    handleSubmit = event =>{
        // event.preventDefault();
        const comData ={
            comment:this.state.comment
        }
        this.props.commentdata(comData)
        toast.success("FeedBack sent successfully")
    }

    




    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <div className="container">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <h3  style={{textAlign:"center"}} >Feedback Form</h3>
                            <textarea style={{marginTop:"50px"}} placeholder="Enter your comment here..." className="form-control" onChange={this.handleChange} value={this.state.comment} rows="10"></textarea><br />
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Feedback
