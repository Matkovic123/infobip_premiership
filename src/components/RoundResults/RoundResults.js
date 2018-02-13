import React from 'react';

const RoundResults = (props) => (
    <div>
        <ul className="list-group">
            {props.matches.map((match) => {
                return (
                    <li key={match.homeTeam}
                        className="list-group-item"
                    >
                        {match.homeTeam} {match.homeTeamScore} :&nbsp;
                        {match.opponentTeam} {match.opponentTeamScore}
                    </li>
                )
            })}
        </ul>
    </div>
);

export default RoundResults;