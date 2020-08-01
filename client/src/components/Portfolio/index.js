import React, { Component } from 'react';
import { GetWork, ClearWork } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class PortfolioView extends Component {

    componentWillUnmount() {
        this.props.dispatch(ClearWork(null));
    }
    componentWillMount() {
        this.props.dispatch(GetWork(this.props.match.params.id))
    }

    renderWorks = (work) => (
        work ?
            <div>
                <div className="goback">
                    <Link to='/'>
                        <FontAwesome name='arrow-left' />
                    </Link>
                </div>
                <div className="br_container">
                    <div className="br_header">
                        <h2>{work.workName}</h2>
                        <h5>{work.developerName} {work.developerLastName}</h5>
                        <div className="br_site">
                            <span>Web site: </span>
                            <a target="_blank" rel="noopener noreferrer" href={work.siteURL}>{work.siteURL}</a>
                        </div>
                    </div>
                    <div className="br_content-wrap">
                        <div className="br_photo">
                            <img alt="work" src={work.imageUrl} />
                        </div>
                        <div className="br_text">
                            {work.abstract}
                        </div>
                    </div>
                    <div className="br_box">
                        <span>Technologies:</span>
                        {work.technologies ?
                            work.technologies.map((tech, i) => {
                                return <div className="left" key={i}>{tech}</div>
                            })
                            : null
                        }

                    </div>
                </div>
            </div>
            : null
    )

    render() {
        let work = this.props.portfolio.work;

        return (
            <div>
                {this.renderWorks(work)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        portfolio: state.portfolio
    }
}
export default connect(mapStateToProps)(PortfolioView);