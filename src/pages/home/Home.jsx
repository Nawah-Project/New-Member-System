import Landing from "./sections/landing/Landing"
import Updates from "./sections/updates/Updates"
import Welcome from "./sections/welcome/Welcome"
import Specialize from "./sections/specialize/Specialize"
import Collaporate from "./sections/collaporate/Collaporate"
import ProSpace from "./sections/pro_space/ProSpace"
export default function Home () {
    return (
        <div style={{marginTop:"100px"}}>
            <Landing />
            <Updates />
            <Welcome />
            <Specialize />
            <Collaporate />
            <ProSpace />
        </div>
    )
}