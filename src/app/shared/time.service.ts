import * as moment from 'moment';

export class TimeService {

  timestampToDate(timestamp: number): string {
    let date = moment.unix(timestamp / 1000).format("M/D/YY");
    return date;
  }

}