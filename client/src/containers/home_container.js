import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWork } from '../actions';
import WorkItem from '../widgetsUI/work_item';


class HomeContainer extends Component {

    state = {
        hideLoadMore: false
    }


    componentWillMount() {
        this.props.dispatch(getWork(4, 0, 'desc'))
    }

    renderItems = (works) => (
        works.list ?
            works.list.map(item => (
                <WorkItem {...item} key={item._id} />
            ))
            : null
    )
    loadmore = () => {
        let count = this.props.portfolio.list.length;
        this.props.dispatch(getWork(3, count, 'desc', this.props.portfolio.list))
        this.hideLoadMore(count)
    }

    hideLoadMore = (number) => {
        setTimeout(() => {
            if (this.props.portfolio.list.length === number) {
                this.setState({ hideLoadMore: true })
            }
        }, 300);
    }

    LoadMoreYesorNot = () => (
        !this.state.hideLoadMore ?
            <div className="loadmore"
                onClick={this.loadmore}
            >
                Load More
                </div>
            :
            <div className="loadmore-2">
                There are no more posts to show right now...
                </div>
    )

    render() {
        return (
            <div>
                {this.renderItems(this.props.portfolio)}
                {this.LoadMoreYesorNot()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        portfolio: state.portfolio
    }
}

export default connect(mapStateToProps)(HomeContainer);