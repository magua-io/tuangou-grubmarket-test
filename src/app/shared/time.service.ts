import * as moment from 'moment';

export class TimeService {

  timestampToDate(timestamp: number): string {
    console.log("got timestamp: ", timestamp);
    let date = moment.unix(timestamp / 1000).format("M/D/YY");
    console.log("date: ", date);
    return date;
  }

}