import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetWork, updateWork, ClearWorkedit, deleteWork } from '../../actions';
import axios from 'axios';


const url = 'https://api.cloudinary.com/v1_1/navedms/image/upload';
const preset = 'gsd2cwto';

class EditWork extends PureComponent {

    state = {
        formdata: {
            _id: this.props.match.params.id,
            workName: '',
            siteURL: '',
            technologies: '',
            selectedFile: null,
            preview: '',
            abstract: ''
        }
    }

    handelInput = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        }

        newFormdata[name] = event.target.value
        this.setState({
            formdata: newFormdata
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        let tech = this.state.formdata.technologies
        let techno = tech.split(', ')
        this.props.dispatch(updateWork({
            _id: this.state.formdata._id,
            workName: this.state.formdata.workName,
            siteURL: this.state.formdata.siteURL,
            imageUrl: this.state.formdata.selectedFile,
            abstract: this.state.formdata.abstract,
            technologies: techno
        }))

    }
    deletePost = () => {
        this.props.dispatch(deleteWork(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(() => {
            this.props.history.push('/user/works')
        }, 1000)
    }
    componentWillMount() {
        this.props.dispatch(GetWork(this.props.match.params.id))
    }
    componentWillReceiveProps(nextProps) {
        let work = nextProps.work.work;
        let tech = work.technologies;
        let thecno = tech.join(', ');
        this.setState({
            formdata: {
                _id: work._id,
                workName: work.workName,
                siteURL: work.siteURL,
                preview: work.imageUrl,
                technologies: thecno,
                abstract: work.abstract
            }
        })
    }

    componentWillUnmount() {
        this.props.dispatch(ClearWorkedit());
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
    handleClick(e) {
        this.refs.fileUploader.click();
    }

    render() {
        let work = this.props.work;
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    {
                        work.updateWork ?
                            <div className="edit_confirm">
                                post updated, <Link to={`/work/${work.work._id}`}>
                                    Click here to see your post
                        </Link>
                            </div>
                            : null
                    }
                    {
                        work.postDeleted ?
                            <div className="red_tag">
                                Post Deleted
                        {this.redirectUser()}
                            </div>
                            : null
                    }
                    <h2>Edit Work</h2>

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
                        <div className="upload-screenshot-title">Edit Screenshot</div>
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
                    <button type="submit">Edit work</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deletePost}
                        >

                            Delete Work
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        work: state.portfolio
    }
}
export default connect(mapStateToProps)(EditWork);