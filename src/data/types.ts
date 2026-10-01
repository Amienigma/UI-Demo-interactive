export type PhoneId = "iphone" | "galaxy" | "nothing" | "huawei";

export type Confidence =
  | "VERIFIED"
  | "INDEPENDENTLY_VERIFIED"
  | "REGIONAL"
  | "UNCONFIRMED";

export type SourceType =
  | "Manufacturer"
  | "Independent lab"
  | "Aggregator"
  | "Specialist press";

export interface Fact {
  id: string;
  label: string;
  value: string;
  confidence: Confidence;
  source: string;
  sourceType: SourceType;
  checked: "2026-10-01";
  note?: string;
}

export interface FactGroup {
  id: string;
  title: string;
  intro?: string;
  facts: Fact[];
}

export interface PhoneRecord {
  id: PhoneId;
  name: string;
  maker: string;
  context: string;
  groups: FactGroup[];
}

export const CHECKED = "2026-10-01" as const;

export function f(
  partial: Omit<Fact, "checked"> & { checked?: Fact["checked"] },
): Fact {
  return { checked: CHECKED, ...partial };
}
