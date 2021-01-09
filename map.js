map = new OpenLayers.Map("mapdiv");
var mercator = new OpenLayers.Projection("EPSG:900913");
var geographic = new OpenLayers.Projection("EPSG:4326");
map.addLayer(new OpenLayers.Layer.OSM());
map.setCenter(new OpenLayers.LonLat(19.4, 52.1).transform(
		            geographic, mercator), 7);
				

var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);

//dodanie znaczników stacji
addMarker(new OpenLayers.LonLat(17.429,50.257).transform(
		            geographic, mercator),"Stacja: BISK Miejscowość: Jarnołtówek wykres");
addMarker(new OpenLayers.LonLat(21.035,52.476).transform(
            geographic, mercator),"Stacja: BOGO Miejscowość: Borowa Góra wykres");
addMarker(new OpenLayers.LonLat(17.073,52.277).transform(
            geographic, mercator),"Stacja: BOR1 Miejscowość: Borówiec wykres");
addMarker(new OpenLayers.LonLat(23.127,52.035).transform(
            geographic, mercator),"Stacja: BPDL Miejscowość: Biała Podlaska wykres");
addMarker(new OpenLayers.LonLat(17.994,53.135).transform(
            geographic, mercator),"Stacja: BYDG Miejscowość: Bydgoszcz wykres");
addMarker(new OpenLayers.LonLat(15.246,52.733).transform(
            geographic, mercator),"Stacja: GORZ Miejscowość: Gorzów Wielkopolski wykres");
addMarker(new OpenLayers.LonLat(21.032,52.097).transform(
            geographic, mercator),"Stacja: JOZE Miejscowość: Józefosław wykres");
addMarker(new OpenLayers.LonLat(19.036,50.253).transform(
            geographic, mercator),"Stacja: KATO Miejscowość: Katowice wykres");
addMarker(new OpenLayers.LonLat(19.920,50.066).transform(
            geographic, mercator),"Stacja: KRAW Miejscowość: Kraków wykres");
addMarker(new OpenLayers.LonLat(20.670,53.892).transform(
            geographic, mercator),"Stacja: LAMA Miejscowość: Lamkówko wykres");
addMarker(new OpenLayers.LonLat(19.460,51.779).transform(
            geographic, mercator),"Stacja: LODZ Miejscowość: Łódź wykres");
addMarker(new OpenLayers.LonLat(22.922,51.631).transform(
            geographic, mercator),"Stacja: PRCZ Miejscowość: Parczew wykres");
addMarker(new OpenLayers.LonLat(17.118,54.472).transform(
            geographic, mercator),"Stacja: REDZ Miejscowość: Redzikowo-Osiedle wykres");
addMarker(new OpenLayers.LonLat(22.928,54.099).transform(
            geographic, mercator),"Stacja: SWKI Miejscowość: Suwałki wykres");
addMarker(new OpenLayers.LonLat(22.586,49.433).transform(
            geographic, mercator),"Stacja: USDL Miejscowość: Ustrzyki wykres");
addMarker(new OpenLayers.LonLat(18.419,54.797).transform(
            geographic, mercator),"Stacja: WLAD Miejscowość: Władysławowo wykres");
addMarker(new OpenLayers.LonLat(17.062,51.113).transform(
		    geographic, mercator),"Stacja: WROC Miejscowość: Wrocław wykres");
//funkcja dodająca marker z dymkiem z informacją
function addMarker(lonlat, popupContentHTML)
{
		var feature = new OpenLayers.Feature(markers, lonlat);
		feature.closeBox = true;
		feature.popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {'maxSize': new OpenLayers.Size(150,300)});
		feature.data.popupContentHTML = popupContentHTML;
		feature.data.overflow = "auto";

		var marker = feature.createMarker();

		var markerClick = function (evt) {
                    if (this.popup == null) {
                        this.popup = this.createPopup(this.closeBox);
                        map.addPopup(this.popup);
                        this.popup.show();
                    } else {
                        this.popup.toggle();
                    }
                    currentPopup = this.popup;
                    OpenLayers.Event.stop(evt);
		};
		marker.events.register("mousedown", feature, markerClick);

		markers.addMarker(marker);
}
var control = new OpenLayers.Control.Click();
map.addControl(control);
control.activate();
