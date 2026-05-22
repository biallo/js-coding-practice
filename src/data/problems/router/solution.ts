type RouteContext = {
  path: string
  params: Record<string, string>
};

type Route = {
  path: string
  handler: (context: RouteContext) => void
};

type NavigationContext = RouteContext & {
  route?: Route
};

function matchRoute(routePath: string, path: string): Record<string, string> | null {
  const routeParts = routePath.split('/').filter(Boolean);
  const pathParts = path.split('/').filter(Boolean);

  if (routeParts.length !== pathParts.length) {
    return null;
  }

  const params: Record<string, string> = {};

  for (let index = 0; index < routeParts.length; index += 1) {
    const routePart = routeParts[index];
    const pathPart = pathParts[index];

    if (routePart.startsWith(':')) {
      params[routePart.slice(1)] = decodeURIComponent(pathPart);
    } else if (routePart !== pathPart) {
      return null;
    }
  }

  return params;
}

export default function createRouter(routes: Route[]) {
  let currentPath =
    typeof window === 'undefined' ? '/' : window.location.pathname || '/';
  const listeners = new Set<(context: NavigationContext) => void>();

  function notify(path: string) {
    currentPath = path;
    let match: { route: Route; params: Record<string, string> } | null = null;

    for (const route of routes) {
      const params = matchRoute(route.path, path);

      if (params) {
        match = { route, params };
        route.handler({ path, params });
        break;
      }
    }

    for (const listener of listeners) {
      listener({ path, route: match?.route, params: match?.params ?? {} });
    }
  }

  function navigate(path: string, replace = false) {
    if (typeof window !== 'undefined') {
      const method = replace ? 'replaceState' : 'pushState';
      window.history[method](null, '', path);
    }

    notify(path);
  }

  return {
    start() {
      if (typeof window !== 'undefined') {
        window.addEventListener('popstate', () => notify(window.location.pathname || '/'));
      }

      notify(currentPath);
    },
    push(path: string) {
      navigate(path);
    },
    replace(path: string) {
      navigate(path, true);
    },
    back() {
      if (typeof window !== 'undefined') {
        window.history.back();
      }
    },
    listen(listener: (context: NavigationContext) => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getCurrentPath() {
      return currentPath;
    },
  };
}
