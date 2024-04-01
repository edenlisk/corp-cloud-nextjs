import scaleImg from "@/public/scale.jpg";
import Hero from "@/src/components/Hero";

const Scale = () => {
    return (
        <Hero
            imgData={scaleImg}
            imgAlt={"Steel Factory"}
            title={"Scale Your App Infinitely"}
        />
    )
}

export default Scale;