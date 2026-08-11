import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Eligibility')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Eligibility"!</div>
}
