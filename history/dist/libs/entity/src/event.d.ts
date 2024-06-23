declare enum Method {
    POST = "POST",
    PUT = "PUT"
}
export declare class Event {
    id: number;
    restMethod: Method;
    userId: number;
    time: Date;
}
export {};
