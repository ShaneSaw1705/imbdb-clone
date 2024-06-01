import "@/styles/globals.css";
import request from "superagent";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    router.push({
      pathname: '/',
      query: {q: search}
    })
  }

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div>
      <div className="w-screen flex justify-between items-center px-4 py-6">
        <ul className="list-none flex flex-row gap-3">
          <Link href={{pathname: '/', query: {q: search}}}>Home</Link>
          <Link href={'/'}>test</Link>
        </ul>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          onKeyDown={handleKeyDown} 
          className="text-slate-700 px-2 py-1"
        />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
