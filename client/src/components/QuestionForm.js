import React from 'react';
import { connect } from 'react-redux';
import '../styles/questionform.css';

import {
    ACTION_CHANGE_NAME,
    ACTION_CHANGE_EMAIL,
    ACTION_CHANGE_QUESTION
} from '../actions/types';

class QuestionForm extends React.Component{
    constructor(props){
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
    }
    changeName = (payload) => {
        return {
            type: ACTION_CHANGE_NAME,
            payload: payload
        }
    };
    changeEmail = (payload) => {
        return {
            type: ACTION_CHANGE_EMAIL,
            payload: payload
        }
    };
    changeQuestion = (payload) => {
        return {
            type: ACTION_CHANGE_QUESTION,
            payload: payload
        }
    };
    senQuestion(){
        fetch('/api/users', {
            method: 'post',
            mode: "cors",
            credentials : "include",
            headers: {
                'Host': 'localhost:3001',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.props.name,
                email: this.props.email,
                question: this.props.question})
        });
    }

    render(){
        const dispatch = this.props.dispatch;
        return(
            <section className="contact-section question-sec">
                <form className="form">
                    <div className="content">
                        <div className="name">
                            <label form="name">Ім'я</label>
                            <input id="name" type="text" name="name" placeholder = "Анна"
                                   onChange={(event) => {
                                       dispatch(this.changeName(event.target.value))
                                   }}/>
                        </div>
                        <div className="email">
                            <label form="email">E-mail</label>
                            <input id="email" type="text" name="email" placeholder="SchoollaWeb@gmail.com"
                                   onChange={(event) => {
                                       dispatch(this.changeEmail(event.target.value))
                                   }}/>
                        </div>
                        <div className="question">
                            <label id="question" form="question">Ваше питання</label>
                            <textarea name="question" id="" cols="30" rows="3"
                                      placeholder = "По ярмарку пошірюється слух про зачарованій червоній жупан,
                           який нібито колись належав одному бісу, вігнаному з пекла."
                                      onChange={(event) => {
                                          dispatch(this.changeQuestion(event.target.value))
                                      }}/>
                        </div>

                        <div className="btn-submit">
                            <button type="submit" onClick = {this.senQuestion}>Відправити</button>
                        </div>

                    </div>
                </form>

            </section>
        )
    }
}
const mapStateToHeaderProps = (state) => {
    return {
        name: state.name,
        email: state.email,
        question: state.question
    }
};

export default connect(mapStateToHeaderProps)(QuestionForm);
