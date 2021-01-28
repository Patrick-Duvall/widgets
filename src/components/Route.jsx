const Route = ({path, children}) => {
  console.log(window.location.pathname);
  console.log(path);
  return window.location.pathname === path
    ? children
    : null;
}

export default Route