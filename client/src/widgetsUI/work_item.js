import React from 'react';
import { Link } from 'react-router-dom';

const WorkItem = (item) => {
    return (
        <Link to={`/work/${item._id}`} className="work_item">
            <div className="work-top-wrap">
                <div className="work-screenShot">
                    <img alt="work" src={item.imageUrl} />
                </div>
                <div className="work_header_wrap">
                    <div className="work_header">
                        <h2>{item.workName}</h2>
                    </div>
                    <div className='work_author'>{item.developerName} {item.developerLastName}
                    </div>
                </div>
            </div>
            <div className="work_items">
                {
                    item.technologies.map((tech, i) => {
                        if (i < 7) { return <div className="work_bubble" key={i}>{tech}</div> }
                        if (i === 7) { return <div className="work_bubble and-more" key={i}>& More</div> }
                        else { return null }
                    })
                }
            </div>
        </Link>
    );
};

export default WorkItem;