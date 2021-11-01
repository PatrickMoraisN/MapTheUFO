type imageProps = {
  url: string;
  width: number;
  height: number;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: { html: string };
    gallery: imageProps[];
  };
};
export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image: imageProps) => (
        <img src={image.url} alt={place.name} key={place.name} />
      ))}
    </>
  );
}
