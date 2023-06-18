declare type data = {
    readonly info: info;
    readonly results: character[];
};

declare type info = {
    readonly count: number;
    readonly pages: number;
    readonly next: string;
    readonly prev: string;
};

declare type character = {
    readonly id: number;
    readonly name: string;
    readonly status: string;
    readonly species: string;
    readonly type: string;
    readonly gender: string;
    readonly origin: {
        readonly name: string;
        readonly url: string;
    };
    readonly location: {
        readonly name: string;
        readonly url: string;
    };
    readonly image: string;
    readonly episode: string[];
    readonly url: string;
    readonly created: string;
};
