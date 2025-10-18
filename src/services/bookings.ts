import { api } from './api';

export interface Booking {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  patientId?: string;
  patientName?: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  fee: number;
  paymentStatus?: 'pending' | 'paid';
}

export interface CreateBookingData {
  doctorId: string;
  date: string;
  time: string;
}

export const bookingsService = {
  async createBooking(data: CreateBookingData): Promise<Booking> {
    return api.post('/book', data);
  },

  async getPatientBookings(): Promise<Booking[]> {
    return api.get('/patient/bookings');
  },

  async getDoctorBookings(): Promise<Booking[]> {
    return api.get('/doctor/bookings');
  },

  async cancelBooking(bookingId: string): Promise<void> {
    return api.delete(`/bookings/${bookingId}`);
  },

  async rescheduleBooking(bookingId: string, date: string, time: string): Promise<Booking> {
    return api.put(`/bookings/${bookingId}`, { date, time });
  },
};
