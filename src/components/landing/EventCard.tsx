import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface EventCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  price: string;
  location: string;
}

export default function EventCard({
  image,
  category,
  title,
  date,
  price,
  location,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span className="font-medium text-primary mr-2">{date}</span>
          <span>{price}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
