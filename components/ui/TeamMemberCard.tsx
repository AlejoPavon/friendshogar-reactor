import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="text-center group">
      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-surface-container-low group-hover:ring-primary transition-all duration-300">
        <img className="w-full h-full object-cover" src={imageUrl} alt={name} />
      </div>
      <h4 className="text-xl font-bold text-on-background">{name}</h4>
      <p className="text-primary font-medium text-sm uppercase tracking-widest mt-1">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
