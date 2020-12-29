import React, { Component } from 'react'

class Display extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div style={{ padding: "10px" }} class="card card_con">
                        {this.props.getcom.reverse().map(e => {
                            return (
                                <div style={{ marginTop: "10px" }} className="card">
                                    <p style={{ padding: "10px" }}> {e.comment} </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
