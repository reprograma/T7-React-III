import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import { postTweets } from '../../services/tweets'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            novoTweet: '',
            tweets: [ ]
        }
    }

    adicionaTweet = (event) => {
        event.preventDefault();

        const postarNovoTweet = {
            conteudo: this.state.novoTweet,
        }
        postTweets(postarNovoTweet, localStorage.getItem('TOKEN'))
        .then(resposta => {
            console.log(resposta.data)
            this.setState(stateAnterior => ({
                tweets: [resposta.data, ...stateAnterior.tweets],
                novoTweet: ''
            }))
        })

        
    }
    render() {
       // console.log('tweets', this.state.tweets)
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@brunavieirat" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet__editorArea">
                                    <span className={`${this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : 'novoTweet__status'}
                                    `}> {this.state.novoTweet.length}/140</span>
                                    <textarea
                                        className="novoTweet__editor"
                                        value={this.state.novoTweet}
                                        placeholder="O que está acontecendo?"
                                        onChange={(event) => this.setState({ novoTweet: event.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="novoTweet__envia"
                                    disabled={this.state.novoTweet.length > 140 ? true : false}
                                >Tweetar</button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">

                                {this.state.tweets.length > 0 ?
                                    this.state.tweets.map((elemento, index) => {
                                        return <Tweet {...elemento} key={index} />
                                    }) : <p> Compartilhe seu primeiro Tweet.</p>
                                }

                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default Home;
