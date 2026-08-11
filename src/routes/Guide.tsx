import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Guide')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Guide"!</div>
}
