import homeImg from "@/public/home.jpg";
import Hero from "@/src/components/Hero";

export default function Home() {
    return <Hero
        imgData={homeImg}
        imgAlt={"Car Factory"}
        title={"Professional Cloud Hosting"}
    />
}
