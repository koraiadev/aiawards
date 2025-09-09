export type HistoryItem = {
    id: number;
    label: string;
    company: string;
};

export type HistorySection = {
    title: string;
    items: HistoryItem[];
};

export type HistoryData = {
    year: number;
    sections: HistorySection[];
};
