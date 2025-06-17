
import { Smartphone, Code, Palette } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-team-green via-team-yellow to-team-green py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-team-white p-4 rounded-full shadow-lg">
            <Smartphone className="w-12 h-12 text-team-green" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-team-white mb-4">
          Notre Équipe
        </h1>
        
        <p className="text-xl md:text-2xl text-team-white/90 mb-8 max-w-3xl mx-auto">
          Découvrez les talents exceptionnels qui ont donné vie à notre application mobile pour valider leurs UE
        </p>
        
        <div className="flex justify-center space-x-8 text-team-white">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6" />
            <span className="font-medium">Développement</span>
          </div>
          <div className="flex items-center space-x-2">
            <Palette className="w-6 h-6" />
            <span className="font-medium">Design</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smartphone className="w-6 h-6" />
            <span className="font-medium">Mobile</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
