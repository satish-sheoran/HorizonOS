export function formatTime(date, is24hr = false) {

    const Time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: is24hr
    })
    return is24hr ? Time.toUpperCase() : Time;
}

export function formatDate(date) {
    return date.toLocaleDateString([], {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    })
}