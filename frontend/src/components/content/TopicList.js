import React, { Component } from 'react'
import Topic from './Topic'
import {Redirect} from 'react-router-dom'
import Fireapp from '../../config/firebaseConfig'
import {Preloader} from '../utlis/Preloader'

class TopicList extends Component {
    state = {
        redirect : null,
        loading : true,
        topics : [],
    }
    createTopic = () => {
        const db = Fireapp.firestore()
        const email = Fireapp.auth().currentUser.email
        const ref = db.collection('topics');
        const id = ''
        ref.add({
            'email':email,
            'title':"Untitled",
            'items':[],
            'description':''
        })
        .then(
            (docRef) => {
                this.setState({
                    redirect : `topic/${docRef.id}`
                })
            }
        )
        .catch((error)=>{
            console.log("Some error occured")
        })
        
    }
    componentWillMount(){
        const db = Fireapp.firestore()
        var topics = []
        var count = 0;
        db.collection("topics").get().then(
            (document) => {
                 document.forEach((doc)=>{
                     //check for user   
                     var x = doc.data()
                     x['id'] = doc.id
                     topics.push(x);
                })
            
            this.setState({
                topics:topics,
                loading:false
            });
            }
        )
         
    }
    render() {
        if(this.state.loading){
            return(
               <Preloader/> 
            )
        }
        else{
            console.log(this.state)
            if(this.state.redirect){
                return(<Redirect push to = {this.state.redirect} />)
            }
            return (
                <div>
                    <button className="waves-effect waves-light purple darken-3 btn create-button" onClick ={this.createTopic}>+ Create</button>
                    
                    {
                        this.state.topics.map((topic)=>{
                            console.log(topic)
                            return(
                                <Topic id = {topic.id} title = {topic.title} items = {topic.items} />
                            )
                        })
                    }
                </div>
            )
        }
    }
}
export default TopicList