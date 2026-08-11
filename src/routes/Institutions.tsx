import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Institutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Institutions"!</div>
}
