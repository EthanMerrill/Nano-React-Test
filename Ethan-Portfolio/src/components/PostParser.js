import React from "react"
import ReactMarkdown from "react-markdown"

function PostParser(props){
    //some js for the parser
    const markdown = props.text
    return (<ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />)
}

export default PostParser