export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Add other shared types/interfaces here as your project grows 