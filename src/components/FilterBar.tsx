import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedPricing: string;
  onPricingChange: (pricing: string) => void;
  categories: string[];
  pricingOptions: string[];
}

export const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPricing,
  onPricingChange,
  categories,
  pricingOptions,
}: FilterBarProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    onSearchChange("");
    onCategoryChange("");
    onPricingChange("");
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedPricing;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search AI services..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card/50 border-border focus:border-primary/50 transition-colors"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
              {[searchQuery, selectedCategory, selectedPricing].filter(Boolean).length}
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            Clear all
          </Button>
        )}
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="space-y-4 p-4 rounded-lg bg-card/30 border border-border">
          {/* Categories */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange("")}
                className="text-xs"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Pricing
            </label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedPricing === "" ? "default" : "outline"}
                size="sm"
                onClick={() => onPricingChange("")}
                className="text-xs"
              >
                All
              </Button>
              {pricingOptions.map((pricing) => (
                <Button
                  key={pricing}
                  variant={selectedPricing === pricing ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPricingChange(pricing)}
                  className="text-xs"
                >
                  {pricing}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};