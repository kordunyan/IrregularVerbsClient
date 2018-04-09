export class Verb {
  constructor(public translate: string,
              public infinitive: string,
              public simple: string,
              public participate: string,
              public image: string,
              public id?: number) {
  }

  public static empty(): Verb {
    return new Verb('', '', '', '', '');
  }

}
