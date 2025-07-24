import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Brain, Sparkles } from "lucide-react";

interface AIService {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  featured: boolean;
}

interface AICardProps {
  service: AIService;
}

const categoryIcons = {
  'Language Model': Brain,
  'Image Generation': Sparkles,
  'Code Assistant': Zap,
  'Research': Brain,
  'Chatbot': Brain,
  'Platform': Zap,
};

export const AICard = ({ service }: AICardProps) => {
  const IconComponent = categoryIcons[service.category as keyof typeof categoryIcons] || Brain;

  return (
    <Card className="group relative overflow-hidden border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
      {service.featured && (
        <div className="absolute right-4 top-4 z-10">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            Featured
          </Badge>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <Badge variant="outline" className="mt-1 text-xs">
                {service.category}
              </Badge>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-accent/50">
              {tag}
            </Badge>
          ))}
          <Badge 
            variant="outline" 
            className={`text-xs ${
              service.pricing === 'Free' 
                ? 'border-ai-electric/50 text-ai-electric' 
                : service.pricing === 'Freemium'
                ? 'border-ai-neural/50 text-ai-neural'
                : 'border-ai-quantum/50 text-ai-quantum'
            }`}
          >
            {service.pricing}
          </Badge>
        </div>

        <Button 
          asChild 
          className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-200"
          variant="outline"
        >
          <a 
            href={service.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Visit {service.name}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
      </div>
    </Card>
  );
};