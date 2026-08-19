import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/Eligibility")({
  component: EligibilityLayout,
})

function EligibilityLayout() {
  return <Outlet />
}