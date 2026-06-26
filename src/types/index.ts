export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
export type Category = 'AI Tools'|'Machine Learning'|'Prompt Engineering'|'Coding'|'Agents'|'Business AI'|'Computer Vision'|'NLP'|'Generative AI'|'Fundamentals';
export interface Lesson { slug: string; title: string; duration: string; isPro?: boolean; summary: string; whatYouLearn: string[]; content: string; code?: { language: string; code: string }; realWorld?: string; commonMistakes?: string[]; quiz?: { q: string; options: string[]; answer: number }[]; practice?: string; }
export interface Course { slug:string; title:string; tagline:string; description:string; level:Level; categories:Category[]; hours:number; lessonsCount:number; cover:string; color:string; author:string; rating:number; students:number; isPro?:boolean; lessons:Lesson[]; }
export interface LearningPath { slug:string; title:string; description:string; level:Level; steps:{title:string; courseSlug?:string; note:string}[]; icon:string; }
export interface Plan { id:'free'|'pro-monthly'|'pro-yearly'; name:string; priceLabel:string; highlight?:boolean; features:string[]; cta:string; }
export interface Video { id:string; title:string; description:string; courseSlug:string; url:string; thumbnail:string; isPro:boolean; }
export type Role = 'Super Admin'|'Admin'|'Editor'|'Instructor'|'Student'|'Pro Student';
export interface User { id:string; name:string; email:string; role:Role; joinedAt:string; status:'active'|'invited'|'disabled'; }
