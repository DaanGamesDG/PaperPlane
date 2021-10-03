const getSettings = () => {
	const dashboard = process.env.DASHBOARD ?? "http://localhost:3000";
	const secret = (process.env.SECRET as string) ?? "secret";
	// eslint-disable-next-line no-inline-comments
	const uploadLimit = Number(process.env.UPLOAD_LIMIT ?? 1073741824); // in Bytes

	return {
		dashboard,
		secret,
		uploadLimit,
	};
};

export default getSettings;
