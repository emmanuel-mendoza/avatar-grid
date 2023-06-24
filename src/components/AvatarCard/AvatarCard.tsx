import React, { ReactElement } from "react";
import Avatar from "../Avatar/Avatar";
import AvatarCardProps from "./AvatarCard.types";
import './AvatarCard.modules.css';

const AvatarCard: React.FC<AvatarCardProps> = ({ avatar, name, role }): ReactElement => {
    return (
        <div className="avatar-card" style={{'--cover-color': avatar.bgColor} as React.CSSProperties}>
            <Avatar {...avatar} />
            <div className="avatar-card-info">
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );  
}

export default AvatarCard;
