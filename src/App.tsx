import React, {useState}from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";


import './App.css'
const MarkdownEditor: React.FC =()=>{
  const[markdown,setMarkdown] =useState<string>('')

  const handleInputChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
  setMarkdown(e.target.value)
  
  }
  const createSanitizeOutput=()=>{
  const rawMarkup = marked(markdown)
  const sanitizedMarkup = DOMPurify.sanitize(rawMarkup)
  return {__html:sanitizedMarkup}
  }
  return(
    <div className="markdown-editor-container">
      <h1 className="editor-title">Markdown Live Preview Demo</h1>
      <textarea className="editor-input" value={markdown} onChange={handleInputChange} placeholder="Enter Markdown here....."></textarea>

    <div className="markdown-preview" dangerouslySetInnerHTML={createSanitizeOutput()} />

   
    </div>
   
    )
}
