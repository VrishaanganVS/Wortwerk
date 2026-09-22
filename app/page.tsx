import Greeting from "./components/Greetings"
import StatCard from "./components/StatCard"
import FocusList from "./components/FocusList"
const sentenceCount = 2 // this is a variable that we can use to store the number of sentences learned this week. we can update this variable whenever the user learns a new sentence.
const remaining = 10 - sentenceCount // this is a variable that we can use to store the number of sentences remaining to learn this week. we can update this variable whenever the user learns a new sentence.
export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#f5f3eb] p-6 text-[#172c26] md:p-10">

      <header className="mx-auto max-w-5xl">
        <p className="text-xl font-bold tracking-tight">
          wortwerk
        </p>

        <p className="mt-1 text-sm text-[#68786f]">
          Dein deutsches Lerntagebuch
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-5xl space-y-8">

        <Greeting />

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StatCard
            title="Wortschatz"
            value="0"
            description="Words learned"
          />
          <StatCard
            title="Sätze"
            value={remaining.toString()}
            description="Sentences learned this week"
          />

          <StatCard
            title="Lernzeit"
            value="0 min"
            description="Studied today"
          />
        </section>

        <FocusList />

      </div>
    </main>
  )
}