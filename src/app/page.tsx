
function Href({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return <a target='_blank' className='text-purple-700' href={href}>{children}</a>
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="w-20 h-20 fill-neutral-600 hover:fill-neutral-500 duration-200">
      <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      className='w-20 h-20 fill-neutral-600 hover:fill-neutral-500 duration-200'
      viewBox="0 0 64 64">
      <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      className='w-20 h-20 fill-neutral-600 hover:fill-neutral-500 duration-200'
      viewBox="0 0 64 64">
      <path d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439"></path>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      className='w-20 h-20 fill-neutral-600 hover:fill-neutral-500 duration-200'
      viewBox="0 0 64 64">
      <path d="M47 34.837V52h7.533C56.448 52 58 50.448 58 48.533V29.486L47 34.837zM47 32l11-7.333v-5.426c0-1.914-.812-3.781-2.325-4.953-2.336-1.809-5.515-1.673-7.665.151L47 15.232V32zM19.814 33.822L32 41 44.349 33.726 43.443 18.023 32 27 20.718 18.149zM17.153 32.102v-16.75L15.99 14.44c-2.15-1.823-5.329-1.961-7.664-.151C6.812 15.46 6 17.328 6 19.243v5.424L17.153 32.102zM6 29.486v19.047C6 50.448 7.552 52 9.467 52H17V34.837L6 29.486z"></path>
    </svg>
  )
}

export default function NewHome() {
  return (
    <>
      <main className='flex flex-col justify-center items-center set-c h-full'>
        <div className=' border-dotted border-neutral-600 p-4 rounded-lg w-8/12'>
          <h1 className='text-4xl mb-12'>Hi, I am <u>Leonardo Iacovini</u></h1>
          <div className='md:flex md:flex-row flex-wrap'>
            <div className='text-lg mt-4'>
              <p>
                A seasoned Software Engineer with strong background in <b>Distributed Systems</b>, <b>Cloud Computing</b>, <b>Functional Programming</b> and <b>Full Stack Web Development</b>.
              </p>
              <p className='mt-8'>
                I majored in Computer Engineering from <u><Href href='https://www.poli.usp.br/'>POLI-USP</Href></u>,
                currently working as a Senior Staff Engineer at <u><Href href='https://nubank.com.br'>Nubank</Href></u> with Clojure.
              </p>
            </div>
          </div>
          <p className='mt-8 text-lg'>
            You can find more about me below.
          </p>
          <div className='flex flex-row justify-evenly mt-8'>
            <a href='https://linkedin.com/in/leoiacovini' target='_blank'><LinkedinIcon /></a>
            <a href='https://github.com/leoiacovini' target='_blank'><GithubIcon /></a>
            <a href='https://twitter.com/leoiacovini' target='_blank'><TwitterIcon /></a>
            <a href='mailto:leoiacovini@gmail.com' target='_blanks'><EmailIcon /></a>
          </div>
        </div>
      </main>
    </>
  )
}
