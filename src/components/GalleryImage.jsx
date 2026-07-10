function GalleryImage({ src, alt }) {
  return (
    <div className="group aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#111a2d]">
      <img
        src={src}
        alt={alt}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

export default GalleryImage;
