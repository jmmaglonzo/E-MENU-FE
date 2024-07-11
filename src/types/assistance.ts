export interface AssistanceRequest {
    id: number;
    requested: string;
    tableNo: number;
    assist: boolean;
    approvedDate?: string,
    approvedBy?: string, 
    createdAt: string 
  }
  