import { useState, useMemo } from "react";
import { AICard } from "@/components/AICard";
import { FilterBar } from "@/components/FilterBar";
import { aiServices } from "@/data/aiServices";
import { Brain, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPricing, setSelectedPricing] = useState("");

  // Extract unique categories and pricing options
  const categories = useMemo(() => {
    return Array.from(new Set(aiServices.map(service => service.category)));
  }, []);

  const pricingOptions = useMemo(() => {
    return Array.from(new Set(aiServices.map(service => service.pricing)));
  }, []);

  // Filter services based on search and filters
  const filteredServices = useMemo(() => {
    return aiServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || service.category === selectedCategory;
      const matchesPricing = !selectedPricing || service.pricing === selectedPricing;

      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, selectedPricing]);

  // Separate featured and regular services
  const featuredServices = filteredServices.filter(service => service.featured);
  const regularServices = filteredServices.filter(service => !service.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.02)_50%,transparent_75%)]" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div className="p-3 rounded-xl bg-ai-neural/10 border border-ai-neural/20">
                <Sparkles className="h-8 w-8 text-ai-neural" />
              </div>
              <div className="p-3 rounded-xl bg-ai-electric/10 border border-ai-electric/20">
                <Zap className="h-8 w-8 text-ai-electric" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-6">
              AI & LLM Directory
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Discover the most powerful AI tools and language models. From ChatGPT to Claude, 
              find the perfect AI assistant for your needs.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-ai-electric" />
                {aiServices.length} AI Services
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-ai-neural" />
                {categories.length} Categories
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Updated Daily
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPricing={selectedPricing}
            onPricingChange={setSelectedPricing}
            categories={categories}
            pricingOptions={pricingOptions}
          />
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredServices.length} of {aiServices.length} AI services
          </p>
        </div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Featured AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <AICard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* All Services */}
        {regularServices.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              All AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularServices.map((service) => (
                <AICard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="p-4 rounded-full bg-muted/30 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No AI services found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("");
                  setSelectedPricing("");
                }}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
