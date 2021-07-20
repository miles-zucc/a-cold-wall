import dynamic from "next/dynamic";

const Component = props => <>{props.children}</>;

const NoSSR = dynamic(() => Promise.resolve(Component), {
  ssr: false
});

export function withNoSSR(Component) {
  return function WithNoSSR(props) {
    return (
      <NoSSR>
        <Component {...props} />
      </NoSSR>
    );
  };
}
