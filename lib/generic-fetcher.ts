export const genericFetcher = async <T>(url: string): Promise<T> => {
	const response = await fetch(url);
	if (!response.ok) {
		const errorBody = await response.json();
		throw new Error(errorBody.error || 'Failed to fetch data from API');
	}
	return response.json();
};
