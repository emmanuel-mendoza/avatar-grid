import React, { ReactElement } from "react";
import AvatarProps, {MaskProps} from "./Avatar.types";
import './Avatar.modules.css';

const Mask: React.FC<MaskProps> = ({ bgColor = 'white', shapeSrc }): ReactElement => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: bgColor,
                WebkitMaskImage: `url(${shapeSrc}), linear-gradient(#fff,#fff)`,
                maskImage: `url(${shapeSrc}), linear-gradient(#fff,#fff)`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
                WebkitMaskOrigin: 'content-box',
                maskOrigin: 'content-box',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
            }} >
        </div>
    );
}

const Avatar: React.FC<AvatarProps> = ({ height = '310px', bgColor = 'white', paddingTop = '0px',
    paddingBottom = '0px', shapeSrc, imageSrc}): ReactElement => {
    return (
        <div className='avatar-container' style={{borderColor: bgColor, borderStyle: 'solid',
            height: `calc(${height} + ${paddingTop} + ${paddingBottom})`, borderTopWidth: paddingTop, borderBottomWidth: paddingBottom}}>
            <div className='mask-container mask-back'>
                <Mask bgColor={bgColor} shapeSrc={shapeSrc} />
            </div>
            <div className='image-container' >
                <img src={imageSrc} loading="lazy" />
            </div>
            <div className="mask-front-wrapper">
                <div className="mask-container mask-front">
                    <Mask bgColor={bgColor} shapeSrc={shapeSrc} />
                </div>
            </div>
        </div>
    );
}

export default Avatar;
