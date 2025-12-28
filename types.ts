export interface Sequence {
  name: string;
  duration: string | null;
  info?: string;
}

export interface Protocol {
  protocol_name: string;
  sequences: Sequence[];
  additional_info?: string; // e.g., "Head > Brain"
}

export interface GroupedData {
  [category: string]: {
    [subCategory: string]: Protocol[];
  };
}