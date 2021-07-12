import React from "react"


class Card extends React.Component{
    render(){
        return <>
            <div className="cards">
            <div className="card">
        <img src={this.props.imgscr} alt="mypic" className="card_img" />
        <div className="card_info">
            <span className="card_category">{this.props.category}</span>
            <h3 className="card_tittle">{this.props.sname}</h3>
            <a href={this.props.links} >
            <button>Watch Now</button>
            </a>

        </div>
    </div>
    </div>
        </>
    }
}
export default Card;

