type TVSHOWETWORK = {
    id: number;
    name: string;
    country: {
        name: string;
        code: string;
        timezone: string;
    };
    officialSite: string;
};
export type TVSHOWSINFO = {
    id: number;
    url: string;
    name: string;
    type: 'Scripted' | 'Reality';
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: { time: string; days: string[] };
    rating: { average: number };
    weight: number;
    network: TVSHOWETWORK;
    externals: { tvrage: number; thetvdb: number; imdb: string };
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    updated: number;
    _links: {
        self: {
            href: string;
        };
        previousepisode: {
            href: string;
        };
    };
};
