import Hero from "@/src/components/Hero";
import ReliabilityImg from "@/public/reliability.jpg";

const Reliability = () => {
    return (
        <Hero
            imgData={ReliabilityImg}
            title={"Super High Reliability Hosting"}
            imgAlt={"Welding"}
        />
    )
}

export default Reliability;