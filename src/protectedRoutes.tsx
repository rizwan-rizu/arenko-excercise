/**
 * This component is used to manage access control for different routes in the application.
 *
 * Features that can be added or improved:
 * 1. **Authentication Check**: Include a check for a valid authentication token (e.g., from localStorage or a context provider).
 * 2. **Role Validation**: Extend the role-based access control to handle multiple levels of permissions or dynamic roles.
 * 3. **Redirects**: Redirect unauthorized users to a login page or an error page instead of simply displaying "Access Denied."
 * 4. **Logging/Tracking**: Log unauthorized access attempts for auditing or debugging purposes.
 * 5. **Dynamic Role Fetching**: Fetch roles dynamically from an API or context instead of relying solely on a static `roles` object.
 * 6. **Error Boundary**: Wrap the component in an error boundary to handle unexpected errors gracefully.
 *
 * Current Usage:
 * - Pass the `element` prop to render the component.
 */

import { ReactElement } from "react";

interface iProtectedRouteProps {
  element: ReactElement
  role: string[]
}

const ProtectedRoute = ({ element }: iProtectedRouteProps) => {

  return element;
}

export default ProtectedRoute;