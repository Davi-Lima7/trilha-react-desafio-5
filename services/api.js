import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://huvneaugtdlkavmznvdq.supabase.co/rest/v1',
  headers: {
    apikey: process.env.SUPABASE_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
  },
});
