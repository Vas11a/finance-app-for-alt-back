interface Message {
    isIncome: boolean;
    description: string;
    price: number;
}

export interface CalendarItem {
    date: number;
    fullData: string;
    total: number;
    messages: Message[];
}


export type HistoryElemType = {
    type: string
    date: string,
    total: number,
}