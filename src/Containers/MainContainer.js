import React from 'react'
import GameContainer from './GameContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import GameShow from '../Components/GameShow'

class MainContainer extends React.Component {
    
    state = {
        newgame: null,
        gamesArray: []
    }
    
    componentDidMount() {
        fetch("http://localhost:3000/api/v1/games")
            .then(response => response.json())
            .then(gameData => this.setState({...this.state, gamesArray: gameData}))
    }

    newgameHelper = () => {
        
    }

    startGame = (gameObj) => {
        this.setState({...this.state, newgame: gameObj})
    }


    render() {
        return(
            <>
                {this.state.newgame ?
                    <GameShow newgame={this.state.newgame} />
                    :
                    
                    <GameContainer startGame={this.startGame} gamesArray={this.state.gamesArray} newgameHelper={this.newgameHelper} /> 
                }
            </>
        )

    }


}

export default withRouter(MainContainer)