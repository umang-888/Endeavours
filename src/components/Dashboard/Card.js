import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div class="card" style={{ border: '1px solid black', margin: '2px' }}>
                <header class="card__header">
                    <div class="card__img">
                        <img src={this.props.member.img} alt="avatar" />
                    </div>
                    <div class="card__name">
                        <h6 style={{ color: 'black' }}>{this.props.member.name}</h6>
                        <span class="card__role" style={{ color: 'black' }}>Developer </span>
                    </div>
                </header>
                <div class="card__body">
                    <div class="stats">
                        <div class="score">
                            <h3 style={{ color: 'black' }}>{this.props.member.score1}</h3>
                            <small class="title" style={{ color: 'black' }}>Nodejs</small>
                        </div>
                        <div class="score">
                            <h3 style={{ color: 'black' }}>{this.props.member.score2}</h3>
                            <small class="title" style={{ color: 'black' }}>React</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;