import { Controller } from 'stimulus';

export default class extends Controller {
  static.targets = ["field", "map", "latitude", "longitude"]
  connect() {
    if (typeof (google) != "undefined") {
      this.initializeMap()
    }
  }

  initializeMap() {
    this.map()
    this.marker()
    this.autocomplete()
  }

  map() {
    if(this._map == undefined) {
      this._map = new google.maps.Map(this.mapTarget, {
        center: new google.maps.LatLng(
          this.latitude.target.value, 
          this.longitude.target.value),
        zoom: 17,
      })
    }

    return this._map
  }

  marker() {

  }

  autocomplete() {

  }
}

