import { useState } from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

function App() {

  const [markdown, setMarkdown] = useState(
  `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  function changeMarkdown() {
    setMarkdown(document.getElementById("editor").value)
  }

  return (
    <div className="App container">
      <div class="card text-bg-primary mb-4 mt-4">
        <div class="card-header">
          Editor
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <textarea rows={"20"} id='editor' className='container' onChange={ changeMarkdown }>
              {markdown}
            </textarea>
          </li>
        </ul>
      </div>
      <div class="card text-bg-success mb-4">
        <div class="card-header">
          Preview
        </div>
        <ul class="list-group list-group-flush">
          <li id='preview' class="list-group-item">
            <ReactMarkdown children={markdown} 
            components={{
                table: (props) => <table className="table table-striped" {...props} />,
                img: (props) => <img className='img-fluid pt-4' {...props} />,
                blockquote : (props) => <blockquote  className='blockquote text-bg-secondary' {...props} />
              }} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
