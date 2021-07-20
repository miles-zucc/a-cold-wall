import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { Loading } from "@/components/Auth/Loading";

const defaultOptions = {
  errorPolicy: "ignore"
};

export const withData = (query, options = {}) => Component => {
  return function WithData(props) {
    const router = useRouter();
    const { slug } = router.query;
    let options = {
      variables: {
        id: slug
      }
    };

    const { data, error, loading } = useQuery(query, {
      ...defaultOptions,
      ...options
    });

    if (error) {
      console.error(error);
      return <div>Error</div>;
    }

    if (loading) {
      return <Loading />;
    }

    return <Component {...props} data={data} />;
  };
};
