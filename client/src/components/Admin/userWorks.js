import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserWorks } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserWorks extends Component {
    componentWillMount() {
        this.props.dispatch(getUserWorks(this.props.user.login.id))
    }
    showUserPosts = (user) => (
        user.userWorks ?
            user.userWorks.map(item => (
                <tr key={item._id}>
                    <td><Link to={`/user/edit-post/${item._id}`}>{item.workName}</Link></td>
                    <td><a target="_blank" rel="noopener noreferrer" href={item.siteURL}>{item.siteURL}</a></td>
                    <td>
                        {moment(item.createAt).format("DD/MM/YY")}
                    </td>
                </tr>
            ))
            : null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="user_posts">
                <h4>My Works</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Web site</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserWorks);