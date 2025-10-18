import { api } from './api';

export interface TestResult {
  id: string;
  patientId: string;
  patientName?: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
  doctorResponse?: {
    notes: string;
    prescription: string;
    requestAppointment: boolean;
    respondedAt: string;
  };
}

export interface DoctorResponse {
  notes: string;
  prescription: string;
  requestAppointment: boolean;
}

export const resultsService = {
  async uploadResults(file: File, doctorId?: string): Promise<TestResult> {
    const formData = new FormData();
    formData.append('file', file);
    if (doctorId) formData.append('doctorId', doctorId);
    
    return api.upload('/upload_results', formData);
  },

  async getPatientResults(): Promise<TestResult[]> {
    return api.get('/patient/results');
  },

  async sendResultsToDoctor(resultId: string, doctorId: string): Promise<void> {
    return api.post('/patient/send_results', { resultId, doctorId });
  },

  async getDoctorPatients(): Promise<TestResult[]> {
    return api.get('/doctor/patients');
  },

  async respondToResults(resultId: string, response: DoctorResponse): Promise<void> {
    return api.post('/doctor/respond', { resultId, ...response });
  },
};
