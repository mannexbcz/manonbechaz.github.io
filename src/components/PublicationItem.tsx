import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PublicationItemProps {
  image: string;
  conference: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  pdfLink?: string;
  codeLink?: string;
  bibtexLink?: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

export const PublicationItem = ({
  image,
  conference,
  title,
  authors,
  venue,
  year,
  pdfLink,
  codeLink,
  bibtexLink,
  badge,
  badgeVariant = "secondary"
}: PublicationItemProps) => {
  return (
    <article className="flex gap-6 mb-8 group">
      <div className="relative flex-shrink-0">
        <img 
          src={image} 
          alt={`${title} preview`}
          className="w-48 h-32 object-cover rounded border border-border"
        />
        <Badge 
          className="absolute top-2 left-2 bg-badge-bg text-badge-text font-semibold px-2 py-1"
        >
          {conference}
        </Badge>
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-serif font-semibold mb-2">
          <a 
            href={pdfLink || "#"} 
            className="text-primary hover:underline"
          >
            {title}
          </a>
        </h3>
        
        <p className="text-sm text-foreground mb-2">
          {authors}
        </p>
        
        <p className="text-sm italic text-muted-foreground mb-3">
          {venue}, {year}.
        </p>
        
        <div className="flex flex-wrap gap-2 items-center">
          {pdfLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 px-3 text-xs"
              asChild
            >
              <a href={pdfLink}>PDF</a>
            </Button>
          )}
          
          {codeLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 px-3 text-xs"
              asChild
            >
              <a href={codeLink}>Code</a>
            </Button>
          )}
          
          {bibtexLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 px-3 text-xs"
              asChild
            >
              <a href={bibtexLink}>BibTex</a>
            </Button>
          )}
          
          {badge && (
            <Badge variant={badgeVariant} className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
      </div>
    </article>
  );
};
