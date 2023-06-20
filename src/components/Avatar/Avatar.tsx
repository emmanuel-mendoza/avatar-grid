import React, { ReactElement } from "react";
import AvatarProps, {MaskProps} from "./Avatar.types";
import './Avatar.modules.css';

const Mask: React.FC<MaskProps> = ({ bgColor = 'white', clipShape }): ReactElement => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: bgColor,
                WebkitMaskImage: `url(${clipShape}), linear-gradient(#fff,#fff)`,
                maskImage: `url(${clipShape}), linear-gradient(#fff,#fff)`,
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

const Avatar: React.FC<AvatarProps> = ({ cmpHeight = '310px', bgColor = 'white', marginT = '0px',
    marginB = '0px', clipShape, imgSrc}): ReactElement => {
    return (
        <div className='avatar-container' style={{borderColor: bgColor, borderStyle: 'solid',
            height: `calc(${cmpHeight} + ${marginT} + ${marginB})`, borderTopWidth: marginT, borderBottomWidth: marginB}}>
            <div className='mask-container mask-back'>
                <Mask bgColor={bgColor} clipShape={clipShape} />
            </div>
            <div className='image-container' >
                <img src={imgSrc} loading="lazy" />
            </div>
            <div className="mask-front-wrapper">
                <div className="mask-container mask-front">
                    <Mask bgColor={bgColor} clipShape={clipShape} />
                </div>
            </div>
        </div>
    );
}

export default Avatar;
