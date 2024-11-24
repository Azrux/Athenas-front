import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a false positive
const Map = () => {
	return (
		<MapContainer
			center={[-34.658138, -58.761655]}
			zoom={13}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[-34.658138, -58.761655]}>
				<Popup>Athenas Club</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
