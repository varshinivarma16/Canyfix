// types.ts
export interface Service {
    issue_uid: string;
    issue_name: string;
    preety_name: string;
    url: string;
    starting_price: number;
    issue_variant: Variant[];
  }
  
  export interface Variant {
    issuevariant_uid: string;
    issuevariant_name: string;
    actual_price: number;
  }
  
export interface SelectedService {
  service: Service;
  variant: Variant;
}
