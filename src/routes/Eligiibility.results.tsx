import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Eligiibility/results')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Eligiibility/results"!</div>
}
