import { Inject, Injectable } from "@angular/core";

@Injectable()
export class LogService {

  log(msn: string) {
    console.log(`: ${msn}`);
  }
}
