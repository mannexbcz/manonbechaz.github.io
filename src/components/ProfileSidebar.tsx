import { User, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-profile-bg p-8 flex flex-col items-center text-center border-r border-border">
      <Avatar className="w-32 h-32 mb-4">
        <AvatarImage src="/placeholder.svg" alt="Profile" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <User className="w-16 h-16" />
        </AvatarFallback>
      </Avatar>
      
      <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
        Your Name
      </h1>
      
      <p className="text-base font-medium text-foreground mb-1">
        Ph.D. Student
      </p>
      
      <p className="text-sm text-muted-foreground mb-1">
        Your Affiliation
      </p>
      
      <p className="text-sm text-muted-foreground mb-6">
        yourname (at) example.edu
      </p>
      
      <div className="flex gap-4 items-center">
        <a 
          href="#" 
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Google Scholar"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/>
          </svg>
        </a>
        
        <a 
          href="#" 
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="CV"
        >
          <FileText className="w-5 h-5" />
        </a>
        
        <a 
          href="#" 
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        
        <a 
          href="#" 
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        
        <a 
          href="#" 
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};
