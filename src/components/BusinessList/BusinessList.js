import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const BusinessList = ({ businesses }) => {
    if (businesses ===  null || []) {
        return (
        <div className="BusinessList">
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style={{ height: '300px', width: '300px' }}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <p>There's some trouble fetching the data...</p>
        </div>
        )
    }

    return (
    <div className="BusinessList">
        {businesses.map((business) => (
            <Business business={business} key={business.id} />
        ))}
    </div>
    )
};

export default BusinessList;