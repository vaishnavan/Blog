import React, { Component } from 'react'
import {toast } from 'react-toastify';
import './form.css'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             url:"",
             content:"",
             postedBy:"",
             createdAt:"",
             
        }
    }

    handleChange = event =>{
        const {name,value} = event.target

        this.setState({
            [name]:value
        })
    }

    handleSubmit = event =>{
        
        const data = {
            title:this.state.title,
            url:this.state.url,
            content:this.state.content,
            postedBy:this.state.postedBy,
            createdAt:this.state.createdAt
        }
        this.props.mydata(data)
        toast.success("Blog created successfully")
        
    }
    




    render() {
        return (
            <div className="form">
                <h2 style={{textAlign:"center"}}>Create a Blog post</h2>
                <div className="container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="">Title</label>
                            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChange}  />

                        </div>
                        <div className="form-group">
                            <label for="">Image URL</label>
                            <input type="text" className="form-control" name="url" value={this.state.url}  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="">Date</label>
                            <input type="date" className="form-control" name="createdAt" value={this.state.createdAt}  onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="">Post your Content Here</label>
                            <textarea className="form-control"  rows="8" name="content" value={this.state.content} onChange={this.handleChange} ></textarea>
                        </div>
                        <div className="form-group">
                            <label for="">PostedBy</label>
                            <input type="text" className="form-control" name="postedBy" value={this.state.postedBy} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Form
