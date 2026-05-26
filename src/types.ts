export interface Amenity {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Bedroom {
  id: string;
  name: string;
  image: string;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Attraction {
  name: string;
  distance: string;
}

export interface DistanceCallout {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  author: string;
  location: string;
  avatar: string;
}
