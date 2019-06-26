import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            novoTweet: '',
            tweets: []
        }
    }

    adicionaTweet = (event) => {
        event.preventDefault();
        // const novoTweet = this.state.novoTweet
        // const anteriores = this.state.tweets
        this.setState(stateAnterior => ({
           tweets: [stateAnterior.novoTweet, ...stateAnterior.tweets],
           novoTweet: ''
        }))
    }
    render() {

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

                        {/* {this.state.tweets.length === 0 ?
                        'bla bla bla ' :
                        this.state.tweets.map((item, i ) => {
                             //console.log('item do map', item)
                             return (
                             <Tweet texto={item} key={i}><Tweet/>                          </Tweet>)

                        })} */}

                                {this.state.tweets.length > 0 ?
                                    this.state.tweets.map((elemento, index) => {
                                        return <Tweet texto={elemento} key={index} />
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
