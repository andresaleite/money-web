import { Inject } from "@angular/core";

export class LogService {

  constructor(@Inject('logPrefixo')  private prefixo: string) {}
  log(msn: string) {
    console.log(`${this.prefixo}: ${msn}`);
  }
}
