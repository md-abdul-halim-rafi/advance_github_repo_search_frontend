import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import "./Card.scss";

export default function Card(props) {

    const { 
        name, author, description, language,
        topContributorUsername, topContributorA, topContributorD, 
        topContributorC, updatedAt
    } = props;

    return (
        <div className="Card">
            <div className="Card--repositoryInfo">
                <h2 className="Card--repositoryInfo--name">{name}</h2>
                <p className="Card--repositoryInfo--author">{author}</p>
                <p className="Card--repositoryInfo--description">{description}</p>
                <p className="Card--repositoryInfo--language">{language}</p>
            </div>
            <div className="Card--contributorInfo">
                <p className="Card--contributorInfo--name">
                    Most Active Contributor: {" "}
                    <b style={{ color: "#183052" }}>{topContributorUsername}</b>
                </p>

                <div className="Card--contributorInfo--stats">
                    <p className="Card--contributorInfo--stats--stat">
                        <span className="Card--contributorInfo--stats--stat--value">
                            {topContributorA}
                        </span>
                        {" "} additions
                    </p>

                    <p className="Card--contributorInfo--stats--stat">
                        <span className="Card--contributorInfo--stats--stat--value">
                            {topContributorD}
                        </span>
                        {" "} deletions
                    </p>

                    <p className="Card--contributorInfo--stats--stat">
                        <span className="Card--contributorInfo--stats--stat--value">
                            {topContributorC}
                        </span>
                        {" "} commits
                    </p>
                </div>

                <p className="Card--updatedAt">
                    Updated on {dayjs(updatedAt).format("MMM DD, YYYY")}
                </p>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topContributorA: PropTypes.number.isRequired,
    topContributorD: PropTypes.number.isRequired,
    topContributorC: PropTypes.number.isRequired,
    topContributorUsername: PropTypes.string.isRequired
}