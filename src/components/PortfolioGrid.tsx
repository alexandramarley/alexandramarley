import { useState } from "react";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

interface PortfolioItem {
  id: number;
  image: string;
  category: "uxui" | "photography";
  title: string;
  description: string;
  link?: string;
}

interface PortfolioGridProps {
  filter: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: portfolio1,
    category: "uxui",
    title: "ToolSwap",
    description: "A community marketplace app for borrowing and lending tools — making DIY easier, cheaper, and more sustainable (Mobile UX- and UI)",
    link: "/projects/toolswap",
  },
  {
    id: 2,
    image: portfolio2,
    category: "photography",
    title: "Architectural Study",
    description: "Minimalist architectural photography",
  },
  {
    id: 3,
    image: portfolio3,
    category: "uxui",
    title: "Danao Topo",
    description: "A graphical representation of the climbing routes in Danao, Philippines (Mobile Product Design)",
    link: "/projects/danao-topo",
  },
  {
    id: 4,
    image: portfolio4,
    category: "photography",
    title: "Natural Landscapes",
    description: "Capturing serene moments",
  },
  {
    id: 6,
    image: portfolio6,
    category: "photography",
    title: "Portrait Series",
    description: "Contemporary portrait photography",
  },
];

const PortfolioGrid = ({ filter }: PortfolioGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredItems.map((item) => {
        const content = (
          <>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay on hover */}
            <div
              className={`absolute inset-0 bg-background/90 flex flex-col items-center justify-center transition-opacity duration-300 ${
                hoveredId === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2 text-center px-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center px-4">{item.description}</p>
            </div>
          </>
        );

        return (
          <div
            key={item.id}
            className="group relative overflow-hidden bg-card rounded-sm cursor-pointer"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {item.link ? (
              <Link to={item.link} className="block">
                {content}
              </Link>
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
