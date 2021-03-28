import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./CodeInput.css";
import Home from "./Home";

export class CodeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlValue: '',
      cssValue: '',
      jsValue: ''
    };

    this.handleHtmlChange = this.handleHtmlChange.bind(this);
    this.handleCssChange = this.handleCssChange.bind(this);
    this.handleJsChange = this.handleJsChange.bind(this);
  }

  componentDidUpdate() {
    this.runCode();
  }

  runCode = () => {
    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${this.state.cssValue}
        </style>
      </head>
      <body>
        ${this.state.htmlValue}

        <script type="text/javascript">
          ${this.state.jsValue}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  handleHtmlChange(event) {
    this.setState({htmlValue: event.target.value});
  }

  handleCssChange(event) {
    this.setState({cssValue: event.target.value});
  }

  handleJsChange(event) {
    this.setState({jsValue: event.target.value});
  }

  render() {
    return (
      <div>
        <div className = "App-code">
          <label>HTML code</label>
          <br/>
          <textarea placeholder="Write some HTML code in here..." onChange={this.handleHtmlChange}></textarea>

          <br/><br/>

          <label>CSS code</label>
          <br/>
          <textarea placeholder="Write some CSS code in here..." onChange={this.handleCssChange}></textarea>

          <br/><br/>

          <label>Javascript code</label>
          <br/>
          <textarea placeholder="Write some JS code in here..." onChange={this.handleJsChange}></textarea>
          <br/>
          <Link to='/'>Return to Home</Link>
        </div>

        <div className = "App-output">
          <iframe frameBorder="0" title="result" className="iframe" ref="iframe" />
        </div>
      </div>
    );
  }
}

export default CodeInput;
