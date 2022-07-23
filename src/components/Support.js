import React from 'react';
import { SupportStyles } from './styles/SupportStyles';

const Support = () => {
    return (
        <>
            <h1 style={{ fontSize: '40px' }}>How we support you</h1>
            <SupportStyles>
                <div>
                    <h4>Host protection and insurance</h4>
                    <small>
                        To support you in the rare event of an incident, most
                        Airbnb bookings include property damage protection and
                        liability insurance of up to $1m USD.
                    </small>
                    <br></br>
                    <small>How you’re protected while Hosting</small>
                </div>
                <div>
                    <h4>COVID-19 safety guidelines</h4>
                    <small>
                        To help protect the health of our community, we’ve
                        partnered with experts to create safety practices for
                        everyone, plus a cleaning process for hosts.
                    </small>
                    <br></br>
                    <small>Get to know the enhanced cleaning process</small>
                </div>
                <div>
                    <h4>High guest standards</h4>
                    <small>
                        To give Hosts peace of mind, we offer guest
                        identification and let you check out reviews of guests
                        before they book. Our new Guest Standards Policy sets
                        higher expectations for behaviour.
                    </small>
                    <br></br>
                    <small>Steps we take to help Hosts feel confident</small>
                </div>
            </SupportStyles>
        </>
    );
};

export default Support;
