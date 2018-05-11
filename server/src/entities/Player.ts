export class Player {
    public x: number;
    public y: number;
    public ready: boolean;
    public id: string;
    public username: string;
    public team: number; // 1 OR 2

    constructor(
        id: string,
        username: string = "(username)",
        x: number = 0,
        y: number = 0,
        ready: boolean = false
    ) {
        this.id = id;
        this.username = username;
        this.x = x;
        this.y = y;
        this.ready = ready;
    }
}
