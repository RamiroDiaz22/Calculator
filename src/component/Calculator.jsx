import React, { Component } from "react";
import "./Calculator.css";

const symbol = /[\*+/-]/;
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      prev: "",
    };
    this.calc = this.calc.bind(this);
    this.resu = this.resu.bind(this);
    this.clear = this.clear.bind(this);
    this.allClear = this.allClear.bind(this);
  }
  calc(e) {
    if (symbol.test(e.target.name)) {
      if (e.target.name === "-") {
        return this.setState({
          result: this.state.result + e.target.name,
          prev: this.state.prev + e.target.name,
        });
      }
      if (symbol.test(this.state.prev)) {
        this.setState({
          result: this.state.result
            .slice(0, -this.state.prev.length)
            .concat(e.target.name),
          prev: e.target.name,
        });
        return;
      }
      return this.setState({
        result: this.state.result + e.target.name,
        prev: e.target.name,
      });
    }
    if (e.target.name === ".") {
      let arr = this.state.result.split(/[\*+/-]/gi);
      if (arr[arr.length - 1].indexOf(".") !== -1) {
        return;
      }
    }
    if (this.state.result[0] == 0) {
      this.setState({
        result: e.target.name,
        prev: "",
      });
    } else {
      this.setState({
        result: this.state.result + e.target.name,
        prev: "",
      });
    }
  }

  resu() {
    this.setState({
      result: eval(this.state.result).toString(),
    });
  }

  clear() {
    this.setState({
      result: this.state.result.slice(0, this.state.result.length - 1),
    });
  }

  allClear() {
    this.setState({
      result: "0",
    });
  }

  render() {
    return (
      <div className="container">
        <div className="grid">
          <form className="dis">
            <input
              type="text"
              value={this.state.result}
              readOnly
              placeholder="0"
              id="display"
            />
          </form>
          <button
            onClick={this.allClear}
            id="clear"
            className="padButton AC tomato"
          >
            AC
          </button>
          <button onClick={this.clear} className="padButton C tomato">
            C
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="/"
            id="divide"
            className="padButton div"
          >
            /
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="*"
            id="multiply"
            className="padButton times"
          >
            X
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="7"
            id="seven"
            className="padButton seven dark-gray"
          >
            7
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="8"
            id="eight"
            className="padButton eight dark-gray"
          >
            8
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="9"
            id="nine"
            className="padButton nine dark-gray"
          >
            9
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="-"
            id="subtract"
            className="padButton minus"
          >
            -
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="4"
            id="four"
            className="padButton four dark-gray"
          >
            4
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="5"
            id="five"
            className="padButton five dark-gray"
          >
            5
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="6"
            id="six"
            className="padButton six dark-gray"
          >
            6
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="+"
            id="add"
            className="padButton plus"
          >
            +
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="1"
            id="one"
            className="padButton one dark-gray"
          >
            1
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="2"
            id="two"
            className="padButton two dark-gray"
          >
            2
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="3"
            id="three"
            className="padButton three dark-gray"
          >
            3
          </button>
          <button
            onClick={this.resu}
            id="equals"
            className="padButton equal blue"
          >
            =
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="0"
            id="zero"
            className="padButton zero dark-gray"
          >
            0
          </button>
          <button
            onClick={(e) => this.calc(e)}
            name="."
            id="decimal"
            className="padButton dot dark-gray"
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
