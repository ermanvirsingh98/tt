export function formatDate(isoString: string): string {
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short', // "Feb"
        year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options); // change locale if needed
}