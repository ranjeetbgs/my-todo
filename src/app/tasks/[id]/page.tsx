import Task from "@/components/task"

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    return <div><Task id={parseInt(id)}/></div>
  }