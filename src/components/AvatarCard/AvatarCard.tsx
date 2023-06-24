import React, { ReactElement } from "react";
import Avatar from "../Avatar/Avatar";
import AvatarCardProps from "./AvatarCard.types";
import './AvatarCard.modules.css';

const AvatarCard: React.FC<AvatarCardProps> = ({ avatar, name, role }): ReactElement => {
    return (
        <Avatar {...avatar} />
    );  
}

export default AvatarCard;
