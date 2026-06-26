import CoursesClient from './CoursesClient';
import { courses } from '@/data/courses';

export const metadata = {
  title: 'Courses — StudyAI',
  description: 'Browse AI, machine learning, Python, prompt engineering, and GenAI courses.',
};

export default function CoursesPage() {
  return <CoursesClient courses={courses} />;
}