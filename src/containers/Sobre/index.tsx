import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      🚀 Olá, eu sou Gabriel Silva, desenvolvedor Full Stack em formação, com
      foco em JavaScript, Vue.js, React e, futuramente, Python. Atualmente,
      estou cursando Full Stack Python na EBAC, buscando expandir minhas
      habilidades tanto no front-end quanto no back-end. Sempre em busca de
      novas oportunidades para aplicar meus conhecimentos no desenvolvimento
      web.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=gabrielsilva3107&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabrielsilva3107&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
