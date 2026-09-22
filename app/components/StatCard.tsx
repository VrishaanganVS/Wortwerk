type StatCardProps = {
  title: string
  value: string
  description: string
}

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#dedfd5] bg-white p-5">
      <p className="text-sm text-[#68786f]">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-1 text-sm text-[#68786f]">
        {description}
      </p>
    </div>
  )
}