export interface Zone {
    left: number,
    top: number,
    width: number,
    height: number,
}
export interface EventList {
    id: number,
    timestamp: number,
    duration: number,
    zone: Zone
}

export interface EventSchema {
    selectedEventId: number | null;
    eventList: EventList [];
    isLoading: boolean;
    error?: string;

}
