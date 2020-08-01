import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddWorkAction, clearNewWork } from '../../actions';
import axios from 'axios';


const url = 'https://api.cloudinary.com/v1_1/navedms/image/upload';
const preset = 'gsd2cwto';

class AddWork extends Component {

    state = {
        formdata: {
            workName: '',
            siteURL: '',
            technologies: '',
            selectedFile: null,
            preview: '/images/uploadicon.png',
            abstract: ''
        }
    }
    showNewWork = (work) => (
        work.post ?
            <div className="conf_link" id="okMsgAdd">
                YES!! <Link to={`/work/${work.portfolioId}`}>
                    Click here to see you'r new work!
                </Link >
            </div >
            : null
    )

    handelInput = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        }

        newFormdata[name] = event.target.value
        this.setState({
            formdata: newFormdata
        })
    }
    handelInputScreen = event => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata.preview = URL.createObjectURL(event.target.files[0]);
        this.setState({
            formdata: newFormdata
        })
        this.onUploadImage(event.target.files[0])
    }
    onUploadImage = async (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', preset);
        try {
            const res = await axios.post(url, formData);
            const imageUrl = res.data.secure_url;
            const newFormdata = {
                ...this.state.formdata
            }
            newFormdata.selectedFile = imageUrl;
            this.setState({
                formdata: newFormdata
            })
        } catch (err) {
            console.error(err);
        };
    }

    submitForm = (e) => {
        e.preventDefault();
        let tech = this.state.formdata.technologies
        let techno = tech.split(', ')

        this.props.dispatch(AddWorkAction({
            workName: this.state.formdata.workName,
            siteURL: this.state.formdata.siteURL,
            imageUrl: this.state.formdata.selectedFile,
            abstract: this.state.formdata.abstract,
            technologies: techno,
            developerId: this.props.user.login.id,
            developerName: this.props.user.login.name,
            developerLastName: this.props.user.login.lastname
        }))
    }
    componentWillUnmount() {
        this.props.dispatch(clearNewWork())
    }

    handleClick(e) {
        this.refs.fileUploader.click();
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add new Work</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter a name of your work"
                            value={this.state.formdata.workName}
                            onChange={(event) => this.handelInput(event, 'workName')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter a website address"
                            value={this.state.formdata.siteURL}
                            onChange={(event) => this.handelInput(event, 'siteURL')}
                        />
                    </div>

                    <textarea
                        value={this.state.formdata.abstract}
                        onChange={(event) => this.handelInput(event, 'abstract')}
                        placeholder="Please enter a few words about your work"
                    />

                    <div className="form_element">
                        <div className="upload-screenshot-title">Upload a Screenshot</div>
                        <img
                            alt="preview"
                            src={this.state.formdata.preview}
                            width='80'
                            height='auto'
                            onClick={(event) => this.handleClick(event)}
                        />
                        <input
                            type="file"
                            id="screenshote"
                            className="screen-shot-input"
                            name="file"
                            ref="fileUploader"
                            accept="image/x-png,image/gif,image/jpeg"
                            onChange={(event) => this.handelInputScreen(event)}
                            value={this.state.formdata.screenShot}
                        />
                    </div>

                    <textarea
                        value={this.state.formdata.technologies}
                        onChange={(event) => this.handelInput(event, 'technologies')}
                        placeholder="What technologies did you use? for example: HTML, CSS, JavaScript, React and so..."
                    />
                    <button type="submit">Add work</button>
                    {
                        this.props.works.newwork ?
                            this.showNewWork(this.props.works.newwork)
                            : null
                    }
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        works: state.portfolio
    }
}
export default connect(mapStateToProps)(AddWork);