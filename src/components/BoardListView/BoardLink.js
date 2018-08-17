import React from "react";
import { Link } from "react-router-dom";
import colors from "../../constants/colors.json";

class BoardLink extends React.Component {
    constructor(props){
      super(props);
      this.state={
        color: ""
      };
    }
  
    componentDidMount(){
      this.setState({color: colors.colors[this.props.number]});
    }
  
    hover(){
      this.setState({color: colors.darkcolors[this.props.number]});
    }
  
    hoverOff(){
      this.setState({color: colors.colors[this.props.number]});
    }
  
    render() {
      const divStyle ={
        backgroundColor: this.state.color
      };
      return (
        <Link className="board__text" to={{ pathname: "/board/" + this.props.id }} onMouseEnter={() => this.hover()} onMouseLeave={() => this.hoverOff()}><div className=" board rounded text-center text-capitalize" style={{backgroundColor: this.state.color}}>
          {this.props.boardtitle}
        </div></Link>
      );
    }
  }

  BoardLink.propTypes = {
    number: PropTypes.string,
    id: PropTypes.string,
    boardtitle: PropTypes.string
  };
  

  export default BoardLink;