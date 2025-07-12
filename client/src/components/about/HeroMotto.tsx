// src/components/about/HeroMotto.tsx

interface HeroMottoProps {
  title: string;  //h1
  subtitle: string; //p
  tagline: string;  //button
}
export const HeroMotto = ({ title, subtitle, tagline }: HeroMottoProps) => {
  return (
    <div className="text-center">
      <h1 className="display-4 fw-bold mb-3">{title}</h1>
      <p className="lead mb-4">{subtitle}</p>
      <div className="d-inline-block bg-warning text-dark px-4 py-2 rounded-pill fw-bold fs-5">
        {tagline}
      </div>
    </div>
  );
};

