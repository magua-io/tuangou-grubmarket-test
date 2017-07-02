import * as moment from 'moment';

export class TimeService {

  timestampToDate(timestamp: number): string {
    let date = moment.unix(timestamp / 1000).format("M/D/YY");
    return date;
  }

  timestampToCountdown(timestamp: number): string {
    return moment.unix(timestamp / 1000).format("D [天] HH [时] mm [分] ss [秒]");
  }

}