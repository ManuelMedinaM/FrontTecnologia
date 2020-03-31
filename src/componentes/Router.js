import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Front from './Front';

class Router extends Component {

    state = {
        scrolled : false,
        detected: false
    }

    componentDidMount() {
        window.addEventListener('mousemove',()=>{
            const y = window.event.clientY < 35;
            if(y === true){
                this.setState({
                    detected:true
                })
            }else{
                this.setState({
                    detected:false
                })
            }

        })
        window.addEventListener('scroll',()=>{
            const isTop = window.scrollY < 1000;
            if(isTop !== true){
                this.setState({
                    scrolled:true
                })
            }else{
                this.setState({
                    scrolled:false
                })
            }
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        return (
            <BrowserRouter>

                    <Header
                    scrolled = {this.state.scrolled}
                    detected={this.state.detected}
                    />
                    
                    <Switch>
                        <Route path="/" exact component={Front} />
                    </Switch>
 
            </BrowserRouter>
        );
    }
}
export default Router;