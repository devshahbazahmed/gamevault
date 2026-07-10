function SectionHeading({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
    </div>
  );
}

export default SectionHeading;
