import tfcImage from '../assets/images/front-example-tfc.png'
import recipeAppImage from '../assets/images/recipe-app.png'
import diceyImage from '../assets/images/dicey.png'

import Venus from '../components/Venus'
import Mars from '../components/Mars'
import Uranus from '../components/Uranus'

const projects = [
    {
        image: diceyImage,
        link: 'https://github.com/gammarkin/dicey',
        description: 'A bot to Discord made with discord.js for the Ordem Paranormal system.',
        title: 'Dicey bot',
        planet: Venus,
    },
    {
        image: recipeAppImage,
        link: 'https://github.com/gammarkin/recipe-app',
        description: 'A recipe app mock web page.',
        title: 'Recipe App',
        planet: Mars,
    },
    {
        image: tfcImage,
        link: 'https://github.com/gammarkin/singy',
        description: 'A bot to Discord made with discord.js for playing youtube songs.',
        title: 'Singy bot',
        planet: Uranus,
    },
]

export default projects
