import React from 'react'
import Duties from './Duties'

function JobInfo({ jobs, currentItem }) {
    const { company, dates, duties, title } = jobs[currentItem]; // Using currentItem to access the current job

    return (
        <article className="job-info">
            <h3>{title}</h3>
            <span className="job-company">
                {company}
            </span>
            <p className="job-date">{dates}</p>
            <Duties duties={duties} />
        </article>
    )
}

export default JobInfo
