class Status {
  private init: Date;
  private ping: Date[];


  public constructor() {
    this.init = this.getDate();
    this.ping = [this.init];
  }


  private getDate(): Date {
    const date = new Date();
    date.setHours(date.getHours() - 3);

    return date;
  }

  private getDateFormated(date: Date) {
    const day = date.getDay();
    const month = date.getMonth();
    const hour = date.getHours();
    const mins = date.getMinutes();

    return `${month}/${day} at ${hour}:${mins > 9 ? mins : `0${mins}`}`;
  }


  public getInit() {
    return this.getDateFormated(this.init);
  }

  public getPing() {
    let list = [];

    for(const i of this.ping)
      list.push(this.getDateFormated(i));

    return list;
  }

  public addPing() {
    this.ping.push(this.getDate());
  }
}


export const status = new Status();
