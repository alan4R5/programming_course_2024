import React from "react";
import '../App.css';

const Search = () => {
    return (
        <>

            <div className="form_search">
                <h2>Job Search</h2>
                <form action="/action_page.php">
                    <label
                        htmlFor="keyword"
                        style={{
                            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                            fontSize: '100%',
                            fontWeight: 'bold',
                            paddingLeft: '2%'
                        }}>
                        Keywords
                    </label><br />
                    <input type="text" id="keyword" name="keywords" placeholder="Keywords" /><br /><br />

                    <label
                        htmlFor="location"
                        style={{
                            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                            fontSize: '100%',
                            fontWeight: 'bold',
                            paddingLeft: '2%'
                        }}>
                        Location
                    </label><br />
                    <input type="text" id="location" name="location" placeholder="Location" /><br /><br />
                </form>

                <form action="/action_page.php">
                    <select name="job-types" id="job-types">
                        <optgroup label="Job Types">
                            <option value="all">All Categories</option>
                            <option value="remote">Remote</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="presencial">Presencial</option>
                            <option value="freelance">Freelance</option>
                        </optgroup>
                    </select>
                    <br />
                </form>
            </div>
        </>
    );
}

export default Search;