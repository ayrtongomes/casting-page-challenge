import React from 'react';

import Header from 'components/Header/Header';
import Card from 'components/Card/Card';
import SubCard from 'components/Card/SubCard';
import starIcon from 'assets/img/icons/star.svg'
import userIcon from 'assets/img/icons/user-up.svg'
import badgeIcon from 'assets/img/icons/badge.svg'
import './index.css';

const name = "Katerina";
const role = "Main Role";

const Container = () => {
    return (
        <div className="main">
            <Header container>
                <div className="item-project container-content">
                    <span>{name}</span>
                    <small>{role}</small>
                </div>
            </Header>
            <div className="container-content">
                <Card title="SHORTLIST" icon={starIcon} subCardsCount={3}>
                    <SubCard mainTitle="Sarah Ornella" secondTitle="23.yo - Canada"/>
                    <SubCard mainTitle="Charlize Theron" secondTitle="17.yo - New York"/>
                    <SubCard mainTitle="Emma Stone" secondTitle="21.yo - Texas"/>
                </Card>
                <Card title="ROUND 2" icon={userIcon} subCardsCount={3}>
                    <SubCard mainTitle="Becca Jeanne" secondTitle="23.yo - Canada"/>
                    <SubCard mainTitle="Kate Adelline" secondTitle="17.yo - New York"/>
                </Card>
                <Card title="FINAL ROUND" icon={badgeIcon} subCardsCount={3}>
                    <SubCard mainTitle="Glory Denyse" secondTitle="23.yo - Canada"/>
                </Card>
            </div>
        </div>
    )
};

export default Container;
