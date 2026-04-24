import "./index.css";

function TechTile({ title }: { title: string }) {
  return (
    <div className="techtile">
      <code>{title}</code>
    </div>
  );
}

export default TechTile;
