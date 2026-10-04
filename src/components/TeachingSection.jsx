import WayToTeach from '../components/WayToTeach'
import {ways} from '../data'
export default function TeachingSection() {
    return  (
        <section>
            <h3>наш подход к обучению</h3>
            <ul>
                {/* <WayToTeach title={ways[0].title} description = {ways[0].description}/>
                <WayToTeach {...ways[1]}/>
                <WayToTeach {...ways[2]}/>
                <WayToTeach {...ways[3]}/> */}

                {ways.map(elem => <WayToTeach key={elem.title} {...elem}/>)}
            </ul>
        </section>
    )
}