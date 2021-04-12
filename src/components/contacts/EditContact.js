import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateContact,getContact} from '../../actions/contactActions'
import TextInputGroup from '../layout/TextInputGroup'
class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }
    componentWillReceiveProps(nextProps,nextState){
        const {name,email,phone} = nextProps.contact
        this.setState({
            name,
            email,
            phone
        })
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getContact(id)
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value}); 
    onSubmit = (e) => {
        e.preventDefault();
        const {name,email,phone} = this.state;
        //Check valid input
        if(name === ''){
            this.setState({error: {name: 'Name is required'}})
            return
        }
        if(email === ''){
            this.setState({error: {email: 'Email is required'}})
            return
        }
        if(phone === ''){
            this.setState({error: {phone: 'Phone is required'}})
            return
        }
        const {id} = this.props.match.params;
        const updtContact = {
            id,
            name,
            email,
            phone
        }
        this.props.updateContact(updtContact);
        //Clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        })
        this.props.history.push('/')
    };
    render() {
        const {name, email, phone, error} = this.state;
        return(
            
                        <div className = "card mb-3">
                            <div className = "card-header display-4"><span className = "text-danger">Edit</span> Contact</div>
                            <div className = "card-body">
                                <form onSubmit = {this.onSubmit.bind(this)}>
                                    <TextInputGroup
                                        label = "Name"
                                        name = "name"
                                        placeholder = "Enter Name"
                                        value = {name}
                                        onChange = {this.onChange}
                                        error = {error.name}
                                    />
                                    <TextInputGroup
                                        label = "Email"
                                        name = "email"
                                        type = "email"
                                        placeholder = "Enter Email"
                                        value = {email}
                                        onChange = {this.onChange}
                                        error = {error.email}
                                    />
                                    <TextInputGroup
                                        label = "Phone"
                                        name = "phone"
                                        type = "phone"
                                        placeholder = "Enter Phone"
                                        value = {phone}
                                        onChange = {this.onChange}
                                        error = {error.phone}
                                    />
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary">Update Contact
                                    </button>
                                </form>
                            </div>
                        </div>
        )
    }
}
EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired
}
const mapStateToProps = (state) =>({
    contact: state.contact.contact
})
export default connect(mapStateToProps,{getContact,updateContact})(EditContact);
