export interface ActionType {
    readonly type: string;
    [propName: string]: any;
}

export interface TestActionType {
    readonly type: string;
    age?: number;
}