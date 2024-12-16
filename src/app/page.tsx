"use client"
import Header from "./layouts/Header"
import Landing from "./layouts/Landing"
import Head from "next/head"

const App = () => {
  return (
    <div className="cv-background min-h-screen text-slate-200">
      <Head>
        <title>Naval Nexus</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
        <Header />
        <Landing />
    </div>
  )
}

export default App