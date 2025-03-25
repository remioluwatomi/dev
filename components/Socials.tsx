import GithubIcon from "./GithubIcon";

const Socials: React.FC = () => {
    return <>
    <div className="socials flex ">
          <a href="https://github.com/remioluwatomi" className="social-link">
            <GithubIcon />
          </a>
          <a href="https://x.com/remioluwatomi" className="social-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M23.5 1h-4.6L14 8.8 8.6 1H.5l9 12.3L.5 23h4.6l5.5-7.8L16.9 23h8.1l-9.2-12.2L23.5 1zm-6.2 2h2.2l-6.3 8.4L18.8 21h-2.2l-6.2-8.5L17.3 3z"/>
          </svg>

          </a>
        </div>
    </>
}

export default Socials;