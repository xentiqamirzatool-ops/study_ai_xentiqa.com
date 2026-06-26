import CoursesClient from './CoursesClient';
import { courses } from '@/data/courses';
export default function CoursesPage() { return <CoursesClient courses={courses} />; }
