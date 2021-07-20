import HomeMenu from "@/components/HomeMenu";
import { withPrivateAccess } from "@/HOC/withPrivateAccess";

const Index = () => <HomeMenu />;

export default withPrivateAccess(Index);
