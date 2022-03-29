import headerLeft from "../../assets/img/section-header-left.png";
import headerRight from "../../assets/img/section-header-right.png";
import CSS from "csstype";
import headerMiddle from "../../assets/img/section-header-middle.png";
import './Heading.scss';
import headerTexture from "../../assets/img/header-text-texture.jpg";

let headingStyle: CSS.Properties = {
    backgroundImage: `url(${headerMiddle})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: '#a5fd01'
}

let textHeadingStyle: CSS.Properties = {
    background: `url(${headerTexture}) no-repeat center center`,
    backgroundSize: 'cover',
    color: "#FFF",
    fontFamily: 'Raleway,sans-serif',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    backgroundClip: 'text',
}

type HeadingProps = {
    title: string,
    img?: string,
    children?: JSX.Element | JSX.Element[]
}

export default function Heading({title, img, children}: HeadingProps) {
    return (
        <div className="Heading pt-5">
            <div className="row justify-content-between">

                {img && (<div className="col-md-2 d-none d-lg-block">
                    <img src={img} />
                </div>)}

                <div className={img ? 'col-lg-7 col-12' : ''}>
                    <div className="d-flex justify-content-center">
                        <div className="heading-image">
                            <img src={headerLeft} />
                        </div>
                        <div style={headingStyle} className="text-heading-container">
                            <h1 style={textHeadingStyle} className="py-2 py-2 px-4 text-heading fw-bold ms-3">
                                {title}
                            </h1>
                            {children && (
                                <div className="main-subtitle text-muted text-center">
                                    {children}
                                </div>
                            )}

                        </div>
                        <div className="heading-image">
                            <img src={headerRight} />
                        </div>

                    </div>
                </div>

                {img && (<div className="col-lg-2 ms-5  d-none d-lg-block">
                    <img src={img} />
                </div>)}
            </div>

        </div>
    )
}
