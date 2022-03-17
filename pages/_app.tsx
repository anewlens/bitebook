import type { AppProps } from 'next/app'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import Layout from '../Components/Layout/Layout'
import '../styles/Global/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {

  const pageTransition = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: { opacity: 0 }
  }

  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <m.div
            key={router.route}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            <Component {...pageProps} />
          </m.div>f
        </AnimatePresence>
      </LazyMotion>
    </Layout>
  )
}

export default MyApp
