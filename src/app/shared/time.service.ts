import * as moment from 'moment';

export class TimeService {

  timestampToDate(timestamp: number): string {
    let date = moment.unix(timestamp / 1000).format("M/D/YY");
    return date;
  }

  timestampToCountdown(timestamp: number): string {
    //return moment.unix(timestamp / 1000).format("D [天] HH [时] mm [分] ss [秒]");
    return moment.unix(timestamp / 1000 - 60 * 60 * 24 * 31 - 60 * 60 * 19).format('D [天] HH [时] mm [分] ss [秒]')
  }

  millsecondsToDay(timeleft: number): number {
    return Math.floor(timeleft / 1000 / 60 / 60 / 24);
  }

  millsecondsToHour(timeleft: number): number {
    return Math.floor(timeleft / 1000 / 3600 % 24);
  }

  millsecondsToMinute(timeleft: number): number {
    return Math.floor(timeleft / 1000 / 60 % 60);
  }

  millsecondsToSecond(timeleft: number): number {
    return Math.floor(timeleft / 1000 % 60);
  }

}