import React from "react";
import jobsList from '../data/jobs.json'

const List = () => {

    return (
        <>
            <section id="joblisting-section">
                <h2>Job Listing</h2>
                {jobsList.map((job) => (
                    <div className="job-listing-div">
                        <h2>{job.title}</h2>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <p>{job.description}</p>
                        <div className="applyButton">
                            <a href={job.applyLink}>Apply now</a>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default List;