import React from 'react';
import { Marker } from "react-google-maps";

class MarkerKelu extends React.Component {

    getStatIcon(status) {
        switch (status) {
            case 'wait': return 'w'
            case 'process': return 'p'
            case 'complete': return 'c'
            default: return 'c'
        }
    }

    getIcon() {
        let status = this.props.profile.detail.status
        let icon = this.props.profile.detail.suggest.labels[1].replace('.png', '');
        let realIcon = 'https://mycity.qlue.id/images/marker-qlue/' + icon.replace('_2', '_mark_') + '_' + this.getStatIcon(status) + '.png';
        return {
            url: realIcon,
            scaledSize: {
                width: 40,
                height: 40
            }
        }
    }

    render() {
        return (
            <Marker
                key={this.props.id}
                size={40}
                icon={this.getIcon()}
                defaultPosition={this.props.profile.location}
                />
        )
    }
}

export default MarkerKelu