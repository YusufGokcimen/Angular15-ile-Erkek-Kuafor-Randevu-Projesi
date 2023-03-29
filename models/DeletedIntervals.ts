export class deletedIntervals{
    id:any | undefined;
    day : number;
    intervals : string[] | undefined

    constructor(id: any,day: number,intervals: string[] | undefined){
        this.id = id
        this.day = day
        this.intervals = intervals
    }
}