import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/projects/list">See Projects</Link>
      <h1 className="justify-center">Hello</h1>
    </main>
  )
}
