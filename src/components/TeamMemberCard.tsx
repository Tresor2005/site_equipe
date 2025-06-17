
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-team-white border-2 border-transparent hover:border-team-green transition-all duration-300 hover:shadow-lg hover:shadow-team-green/20 hover:-translate-y-2">
      <CardContent className="p-6 text-center">
        <div className="relative mb-4 mx-auto w-32 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-team-green to-team-yellow rounded-full p-1">
            <div className="w-full h-full bg-team-white rounded-full overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-team-yellow rounded-full animate-pulse-ring opacity-75"></div>
        </div>
        
        <h3 className="text-xl font-bold text-team-dark-green mb-2 group-hover:text-team-green transition-colors duration-300">
          {member.name}
        </h3>
        
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-team-green to-team-yellow text-team-white text-sm font-medium rounded-full mb-3">
          {member.role}
        </div>
        
        {member.bio && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
