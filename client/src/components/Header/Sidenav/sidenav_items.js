import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';


const SideNavItems = ({ user }) => {

    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'user',
            text: 'My Profile',
            link: '/user',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'briefcase',
            text: 'My Works',
            link: '/user/works',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'upload',
            text: 'Add Work',
            link: '/user/add-work',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'sign-in',
            text: 'Sign in',
            link: '/signin',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            icon: 'sign-out',
            text: 'Sign out',
            link: '/user/signout',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'plus-circle',
            text: 'Sign up',
            link: '/user/signup',
            restricted: false,
            exclude: true
        }
    ]
    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
        user.login ?
            items.map((item, i) => {
                if (user.login.isAuth) {
                    return !item.exclude ?
                        element(item, i)
                        : null
                } else {
                    return !item.restricted ?
                        element(item, i)
                        : null
                }
            })
            : null
    )

    return (
        <div>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SideNavItems)