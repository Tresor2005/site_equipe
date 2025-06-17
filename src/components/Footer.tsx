
import { Heart, Code, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-team-dark-green text-team-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Smartphone className="w-8 h-8 text-team-yellow mr-2" />
              <h3 className="text-xl font-bold">Analystes programmeur</h3>
            </div>
            <p className="text-team-white/80">
              Créateurs d'applications mobiles innovantes avec passion et expertise.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-team-yellow">Notre Mission</h4>
            <p className="text-team-white/80">
              Valider notre UE d'introduction a l'intelligence artificielle et a la progarmmation mobile
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-team-yellow">Technologies</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <p>React Vite Typescript</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-team-white/20 pt-8 text-center">
          <p className="text-team-white/60">
            © 2024 Analystes programmeur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
