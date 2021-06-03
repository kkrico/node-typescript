export interface Usuario {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}
