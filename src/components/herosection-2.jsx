import "../App.css";

const companiesList = [
  { id: 1, title: "Apple", imgUrl: "https://cdn.simpleicons.org/apple?viewbox=auto" },
  { id: 2, title: "TraderMade", imgUrl: "https://tradermade.com/static/imgs/tradermade_logo-01.png" },
  { id: 3, title: "Nike", imgUrl: "https://cdn.simpleicons.org/nike?viewbox=auto" },
  { id: 4, title: "Samsung", imgUrl: "https://cdn.simpleicons.org/samsung?viewbox=auto" },
  { id: 5, title: "Puma", imgUrl: "https://cdn.simpleicons.org/puma?viewbox=auto" },
  { id: 6, title: "Kubernetes", imgUrl: "https://cdn.simpleicons.org/kubernetes?viewbox=auto" },
  { id: 7, title: "AMD", imgUrl: "https://cdn.simpleicons.org/amd?viewbox=auto" },
];

const LogoItem = ({ company }) => (
  <div className="flex flex-col px-5 font-bold text-lg items-center gap-3 shrink-0">
    {company.title}
    <img
      src={company.imgUrl}
      alt={company.title}
      className="h-20 w-40 invert brightness-0 rounded-3xl object-contain py-2"
    />
  </div>
);

const HeroSectionCompanies = () => {
  return (
    <section id="client" className="bg-black text-white overflow-hidden py-4 h-110">
        <div className="text-8xl font-bold text-center py-5 mt-5 mb-20">Our Clients</div>
      <div className="marquee-track">
        <div className="marquee-group">
          {companiesList.map((company) => (
            <LogoItem key={`a-${company.id}`} company={company} />
          ))}
        </div>

        <div className="marquee-group" aria-hidden="true">
          {companiesList.map((company) => (
            <LogoItem key={`b-${company.id}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCompanies;
