import { Component } from "react";
import { Link } from "react-router-dom";
import "./CodeInput.css";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

const someCode = `
class App extends React.Component {
  render() {
    return (
      <p>Hey there, Edit some code to see the Live changes</p>
    )
  }
}`;

export class ReactCodeEditor extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Return to Home</Link>
        <h5>Input some JSX code below</h5>
        <LiveProvider code= {someCode}>
          <LiveEditor />
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }
}

export default ReactCodeEditor;
