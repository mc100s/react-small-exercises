import React, { Component } from 'react';

export default class Exercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      r: 127,
      g: 255,
      b: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }
  to2Hex(x) {
    return ('0' + x.toString(16)).substr(-2)
  }
  render() {
    let values = ['r', 'g', 'b']
    let squareStyle = {
      backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`
    }
    let rgb = `rgb(${this.state.r},${this.state.g},${this.state.b})`
    let hex = '#' + this.to2Hex(this.state.r) + this.to2Hex(this.state.g) + this.to2Hex(this.state.b)
    let colorName = colors[hex]
    return (
      <div className="Exercise">
        <h1>Exercise 5</h1>
        <div className="alert alert-primary">
          <u>Iteration 1</u>: Change the value of R, G and B when scrolling the range inputs.<br />
          <u>Iteration 2</u>: Change the background color of the square according to RGB.<br />
          <u>Iteration 3</u>: Update the value <code>rgb(127,255,0)</code> and <code>#7fff00</code> according to RGB. For this, you can use <code>myNumber.toString(16)</code>.<br />
          <u>Iteration 4</u>: If the displayed color match one from the global variable <code>colors</code>, display its name.<br />
        </div>

        <div className="row align-items-center my-5">
          <div className="col-6">
            <table className="ml-auto">
              <tbody>
                {values.map(v => (
                  <tr key={v}>
                    <td style={{ minWidth: 80 }}>{v.toUpperCase()}: {this.state[v]}</td>
                    <td>
                      <input
                        type="range"
                        max="255"
                        className="form-control"
                        name={v}
                        value={this.state[v]}
                        onChange={this.handleChange} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-6">
            <div className="square" style={squareStyle} />
          </div>
        </div>
        <div className="text-center lead ">
          <pre>
            {rgb}
            <br />
            {hex}
            <br />
            {colorName}
          </pre>

        </div>
      </div>
    );
  }
}

let colors = {
  "#f0f8ff": "aliceblue",
  "#faebd7": "antiquewhite",
  "#7fffd4": "aquamarine",
  "#f0ffff": "azure",
  "#f5f5dc": "beige",
  "#ffe4c4": "bisque",
  "#000000": "black",
  "#ffebcd": "blanchedalmond",
  "#0000ff": "blue",
  "#8a2be2": "blueviolet",
  "#a52a2a": "brown",
  "#deb887": "burlywood",
  "#5f9ea0": "cadetblue",
  "#7fff00": "chartreuse",
  "#d2691e": "chocolate",
  "#ff7f50": "coral",
  "#6495ed": "cornflowerblue",
  "#fff8dc": "cornsilk",
  "#dc143c": "crimson",
  "#00ffff": "cyan",
  "#00008b": "darkblue",
  "#008b8b": "darkcyan",
  "#b8860b": "darkgoldenrod",
  "#006400": "darkgreen",
  "#a9a9a9": "darkgrey",
  "#bdb76b": "darkkhaki",
  "#8b008b": "darkmagenta",
  "#556b2f": "darkolivegreen",
  "#ff8c00": "darkorange",
  "#9932cc": "darkorchid",
  "#8b0000": "darkred",
  "#e9967a": "darksalmon",
  "#8fbc8f": "darkseagreen",
  "#483d8b": "darkslateblue",
  "#2f4f4f": "darkslategrey",
  "#00ced1": "darkturquoise",
  "#9400d3": "darkviolet",
  "#ff1493": "deeppink",
  "#00bfff": "deepskyblue",
  "#696969": "dimgrey",
  "#1e90ff": "dodgerblue",
  "#b22222": "firebrick",
  "#fffaf0": "floralwhite",
  "#228b22": "forestgreen",
  "#dcdcdc": "gainsboro",
  "#f8f8ff": "ghostwhite",
  "#ffd700": "gold",
  "#daa520": "goldenrod",
  "#008000": "green",
  "#adff2f": "greenyellow",
  "#808080": "grey",
  "#f0fff0": "honeydew",
  "#ff69b4": "hotpink",
  "#cd5c5c": "indianred",
  "#4b0082": "indigo",
  "#fffff0": "ivory",
  "#f0e68c": "khaki",
  "#e6e6fa": "lavender",
  "#fff0f5": "lavenderblush",
  "#7cfc00": "lawngreen",
  "#fffacd": "lemonchiffon",
  "#add8e6": "lightblue",
  "#f08080": "lightcoral",
  "#e0ffff": "lightcyan",
  "#fafad2": "lightgoldenrodyellow",
  "#90ee90": "lightgreen",
  "#d3d3d3": "lightgrey",
  "#ffb6c1": "lightpink",
  "#ffa07a": "lightsalmon",
  "#20b2aa": "lightseagreen",
  "#87cefa": "lightskyblue",
  "#778899": "lightslategrey",
  "#b0c4de": "lightsteelblue",
  "#ffffe0": "lightyellow",
  "#00ff00": "lime",
  "#32cd32": "limegreen",
  "#faf0e6": "linen",
  "#ff00ff": "magenta",
  "#800000": "maroon",
  "#66cdaa": "mediumaquamarine",
  "#0000cd": "mediumblue",
  "#ba55d3": "mediumorchid",
  "#9370db": "mediumpurple",
  "#3cb371": "mediumseagreen",
  "#7b68ee": "mediumslateblue",
  "#00fa9a": "mediumspringgreen",
  "#48d1cc": "mediumturquoise",
  "#c71585": "mediumvioletred",
  "#191970": "midnightblue",
  "#f5fffa": "mintcream",
  "#ffe4e1": "mistyrose",
  "#ffe4b5": "moccasin",
  "#ffdead": "navajowhite",
  "#000080": "navy",
  "#fdf5e6": "oldlace",
  "#808000": "olive",
  "#6b8e23": "olivedrab",
  "#ffa500": "orange",
  "#ff4500": "orangered",
  "#da70d6": "orchid",
  "#eee8aa": "palegoldenrod",
  "#98fb98": "palegreen",
  "#afeeee": "paleturquoise",
  "#db7093": "palevioletred",
  "#ffefd5": "papayawhip",
  "#ffdab9": "peachpuff",
  "#cd853f": "peru",
  "#ffc0cb": "pink",
  "#dda0dd": "plum",
  "#b0e0e6": "powderblue",
  "#800080": "purple",
  "#663399": "rebeccapurple",
  "#ff0000": "red",
  "#bc8f8f": "rosybrown",
  "#4169e1": "royalblue",
  "#8b4513": "saddlebrown",
  "#fa8072": "salmon",
  "#f4a460": "sandybrown",
  "#2e8b57": "seagreen",
  "#fff5ee": "seashell",
  "#a0522d": "sienna",
  "#c0c0c0": "silver",
  "#87ceeb": "skyblue",
  "#6a5acd": "slateblue",
  "#708090": "slategrey",
  "#fffafa": "snow",
  "#00ff7f": "springgreen",
  "#4682b4": "steelblue",
  "#d2b48c": "tan",
  "#008080": "teal",
  "#d8bfd8": "thistle",
  "#ff6347": "tomato",
  "#40e0d0": "turquoise",
  "#ee82ee": "violet",
  "#f5deb3": "wheat",
  "#ffffff": "white",
  "#f5f5f5": "whitesmoke",
  "#ffff00": "yellow",
  "#9acd32": "yellowgreen",
}