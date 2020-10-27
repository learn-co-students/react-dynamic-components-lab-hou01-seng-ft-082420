//your code here
import React, { Component } from 'react'
import BlogPost from './BlogPost'

export default class Comments extends Component{
    render(){
        return(
            <div className = "comment" >
                {this.props.commentText}
            </div>

        )
    }
}