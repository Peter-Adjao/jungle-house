import Image from "next/image";
import "../styles/Banner.css";

function Banner() {
    const title = "Jungle House";
    return (
        <div className="jh-banner">
            <Image
             src ="/logo.png" 
             alt="JUngle House" className="jh-logo"
             width={45}
             height={45}
             />
            <h1 className="jh-title">{title}</h1>
        </div>
    )
}

export default Banner;