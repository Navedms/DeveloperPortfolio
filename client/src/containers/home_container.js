import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWork } from '../actions';
import WorkItem from '../widgetsUI/work_item';


class HomeContainer extends Component {


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
    }

    render() {

        return (
            <div>
                {this.renderItems(this.props.portfolio)}
                <div className="loadmore"
                    onClick={this.loadmore}
                >
                    Load More
                </div>
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