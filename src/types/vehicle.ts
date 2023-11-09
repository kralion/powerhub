import { Station } from "./station";

export type Vehicle = {
  id: string;
  ev: string;
  battery: number;
  range: number;
  temperature: number;
  avgEnergy: number;
  distance: number;
  batteryStatus: string;
  vehicleOverview: string;
};
