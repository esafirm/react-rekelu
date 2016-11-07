import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const url = 'https://mycity.qlue.id/api/mycity/mycity_maps.php?ne_lat=-6.101777047407878&ne_lng=106.92906001542974&sw_lat=-6.366619750811611&sw_lng=106.72237971757818'
const urlLite = 'https://mycity.qlue.id/api/mycity/mycity_maps_lite.php?ne_lat=-6.101777047407878&ne_lng=106.92906001542974&sw_lat=-6.366619750811611&sw_lng=106.72237971757818'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markers: []
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    axios.get(url)
      .then(res => {
        this.setState({
          markers: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log('marker', this.state.markers)

    const mapCenter = { lat: -6.20865032, lng: 106.8456459 }
    const SimpleMapExampleGoogleMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={mapCenter}
        >
        {this.state.markers.map((marker, index) => (
          <Marker
            defaultPosition={{ 
              lat: marker.profile.location.lat,
              lng: marker.profile.location.lng
            }}
            />
        ))}
      </GoogleMap>
    ));

    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        />
    );
  }
}

export default App;
