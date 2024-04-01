import Hero from "@/src/components/Hero";
import performanceImg from "@/public/performance.jpg";


const Performance = () => {
    return <Hero
        imgData={performanceImg}
        title={"We Serve High Performance Applications"}
        imgAlt={"Welding"}
    />
}

export default Performance;