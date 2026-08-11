import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Programmes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Programmes"!</div>
}
