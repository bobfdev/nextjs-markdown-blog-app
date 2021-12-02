import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
      <>
        Hello
        <Component {...pageProps} />
      </>
    )
  }

export default MyApp
