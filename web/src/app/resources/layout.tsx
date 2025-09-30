import { ReactNode } from 'react';

export const metadata = { 
  title: "Resources - Republic of Scholars Initiative",
  description: "Access free CV templates, cover letters, interview guides, and more to excel as a law student in Nigeria."
};

export default function ResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
