declare global {
	interface Music {
		id: string;
		title: string;
		artist: Artist;
		album: Album;
		thumbnail: string;
	}

	interface Artist {
		id: string;
		name: string;
	}

	interface Album {
		id: string;
		title: string;
	}
}

export {};
