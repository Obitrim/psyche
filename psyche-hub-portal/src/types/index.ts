
export type ArticleStatus = "published" | "draft";

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  category: Category;
  tags: Tag[];
  status: ArticleStatus;
  createdAt: string;
  updatedAt: string;
  readTime: number;
  featured?: boolean;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: "admin" | "psychologist" | "editor"; 
  verified: boolean;
  specialties?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Psychologist {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  specialties: string[];
  education: string[];
  experience: string[];
  verified: boolean;
  availableSlots: TimeSlot[];
  consultationTypes: ConsultationType[];
  rating: number;
  reviewCount: number;
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  platform: "zoom" | "google-meet" | "skype" | "in-person";
}

export interface Booking {
  id: string;
  psychologistId: string;
  clientId: string;
  consultationTypeId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: "pending" | "confirmed" | "canceled" | "completed";
  platform: "zoom" | "google-meet" | "skype" | "in-person";
  meetingLink?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "psychologist" | "client";
  avatar?: string;
  bookings?: Booking[];
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  replies?: Comment[];
}
