import { redirect } from 'next/navigation';

// The AI Tutor is now a floating chatbot (bottom-nav "Tutor" + the floating
// button), not a standalone page. Anyone hitting /ai-tutor is sent home.
export default function AiTutorRedirect() {
  redirect('/');
}
