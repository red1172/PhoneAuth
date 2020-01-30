export class PhoneNumber {
  tel: string;


  // format phone numbers as E.164
  get e164() {
    const num = this.tel ;
    return `+${num}`;
  }
}
