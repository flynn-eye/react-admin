export namespace NNobelTypes {
  export interface INobel {
    id: string;
    knownName: KnownName;
    givenName: KnownName;
    familyName?: KnownName;
    fullName: KnownName;
    gender: string;
    birth: Birth;
    links: Links;
    nobelPrizes: NobelPrize[];
    death?: Death;
    penName?: string;
  }

  export interface Death {
    date: string;
    place: Place2;
  }

  export interface Place2 {
    city?: Country;
    country?: Country;
    cityNow?: Country;
    countryNow?: Country;
    continent?: Continent;
    locationString: Country;
  }

  export interface NobelPrize {
    awardYear: string;
    category: Country;
    categoryFullName: Country;
    sortOrder: string;
    portion: string;
    dateAwarded?: string;
    prizeStatus: string;
    motivation: City;
    prizeAmount: number;
    prizeAmountAdjusted: number;
    affiliations?: Affiliation[];
    links: Links;
    residences?: Residence[];
    topMotivation?: TopMotivation;
  }

  export interface TopMotivation {
    en: string;
    se?: string;
  }

  export interface Residence {
    country: Country;
    countryNow?: Country;
    locationString: Country;
    city?: City;
    cityNow?: City;
  }

  export interface Affiliation {
    name: Country;
    nameNow: Continent;
    city: Country;
    country: Country;
    cityNow: Country;
    countryNow: Country;
    locationString: Country;
  }

  export interface Links {
    rel: string;
    href: string;
    action: string;
    types: string;
  }

  export interface Birth {
    date: string;
    place: Place;
  }

  export interface Place {
    city?: City;
    country: Country;
    cityNow?: City;
    countryNow: Country;
    continent: Continent;
    locationString: Country;
  }

  export interface Continent {
    en: string;
  }

  export interface Country {
    en: string;
    no: string;
    se: string;
  }

  export interface City {
    en: string;
    no?: string;
    se?: string;
  }

  export interface KnownName {
    en: string;
    se: string;
    no?: string;
  }
}
