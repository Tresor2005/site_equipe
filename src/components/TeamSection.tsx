
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    id: 1,
    name: "MKOUNGA TATCHUM Laurent joel",
    role: "Chef de Projet",
    photo: "./src/Images/Joel.jfif",
    bio: "Expert en gestion de projet avec 6 mois d'expérience dans le développement mobile. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile."
  },
  {
    id: 2,
    name: "TCHINDA Tresor Junior",
    role: "Développeur Lead",
    photo: "./src/Images/Tresor.png",
    bio: "Développeur passionné spécialisé en React Native et architecture mobile. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 3,
    name: "CHEUTI WAWO Ruth Loveline",
    role: "Designer UX/UI",
    photo: "src/Images/Ruth.png",
    bio: "Créatrice d'expériences utilisateur exceptionnelles avec un œil pour le détail. Elle veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 4,
    name: "BETCHEM A KEDI Rene David",
    role: "Développeur Backend",
    photo: "src/Images/David.jfif",
    bio: "Architecte backend expert en API et bases de données scalables. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 5,
    name: "MOLO NDJODO Ines Melissa",
    role: "QA Engineer",
    photo: "src/Images/Melissa.jfif",
    bio: "Spécialiste qualité garantissant une expérience utilisateur parfaite. Elle veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 6,
    name: "MBALLA ELOUNDOU Dominique",
    role: "DevOps Engineer",
    photo: "src/Images/Dominique.jfif",
    bio: "Expert en infrastructure et déploiement continu pour applications mobiles. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 7,
    name: "MENDOUGA Derode Valentin",
    role: "Développeur Frontend",
    photo: "src/Images/valentin.png",
    bio: "Spécialiste React et interfaces utilisateur modernes et interactives. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 8,
    name: "NOUBISSI KOUOKAM Jules Alain",
    role: "Architecte Logiciel",
    photo: "src/Images/Jules.png",
    bio: "Expert en conception d'architectures robustes et évolutives. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 9,
    name: "SINBAÏ Ezechiel",
    role: "Product Owner",
    photo: "src/Images/Ezechiel.jfif",
    bio: "Responsable produit orientée utilisateur et stratégie business. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 10,
    name: "POLA TAGNE Emmanuel Celia",
    role: "Développeur Mobile",
    photo: "https://github.com/Tresor2005/site_equipe/blob/main/src/Images/Celia.jfif",
    bio: "Développeur natif iOS et Android avec expertise en performances. Elle veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 11,
    name: "MBANG BILOA Raphael Angelo",
    role: "Data Scientist",
    photo: "src/Images/Raphael.jfif",
    bio: "Analyste de données spécialisée en intelligence artificielle et machine learning. Il veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  },
  {
    id: 12,
    name: "TSOMENE Leslie Olga",
    role: "Scrum Master",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    bio: "Facilitateur agile expert en méthodologies Scrum et amélioration continue. Elle veut valider son UE d'introduction à l'intelligence artificielle et à la programmation mobile"
  }
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-team-white via-gray-50 to-team-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-team-dark-green mb-4">
            Les Artisans de l'Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe de 12 développeurs talentueux apporte son expertise unique pour créer 
            des solutions mobiles exceptionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Nouvelle section : NOS PROJETS */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-team-dark-green text-center mb-8">
            NOS PROJETS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description Application Mobile */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-team-dark-green mb-4">
                Notre Application Mobile
              </h3>
              <p className="text-muted-foreground mb-4">
                Une solution innovante qui facilite l'accès aux services de chambre l'universite et améliore l'expérience utilisateur.
              </p>
              <a
                href="https://expo.dev/artifacts/eas/fEn6aFfZVEUE4rUXx1n7eT.apk"
                className="inline-block bg-team-green text-team-white font-bold py-2 px-4 rounded-lg shadow-md"
              >
                Télécharger l'App
              </a>
            </div>

            {/* Description Chatbot */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-team-dark-green mb-4">
                Notre Chatbot Intelligent
              </h3>
              <p className="text-muted-foreground">
                Un assistant virtuel performant conçu pour répondre aux besoins des Etudiants et visiteur en rapport avec l'universite en toute fluidité et efficacité.
              </p>
            </div>
          </div>
        </div>

        {/* Section slogan */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-to-r from-team-green to-team-yellow rounded-xl text-team-white">
            <h3 className="text-xl font-bold mb-2">Ensemble, nous créons l'excellence</h3>
            <p className="text-team-white/90">
              Notre force réside dans la collaboration et la passion partagée pour l'innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
