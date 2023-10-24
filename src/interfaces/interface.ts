export type storeDetails = {
	name: string;
	email: string;
	phone: string;
};

export type timings = {
	day: string;
	timing: string;
	formattedDay: string;
};

export type dayInfo = {
	open: string;
	close: string;
	closed: string;
};

export type address = {
	street: string;
	state: string;
	country: string;
};

export type branchDetails = {
	id: string;
	name: string;
	description: string;
	email: string;
	imageUrl: string;
	timings: timings[];
	storeStatus: string;
	address: address;
	phone: string;
};

export type branchDetailsResponse = {
	_id: string;
	branchName: string;
	description: string;
	email: string;
	imageUrl: string;
	timings: any[];
	address: address;
	phone: string;
};
