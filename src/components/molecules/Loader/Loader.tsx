import { Loader2, LucideProps } from "lucide-react";
import { FC } from "react";

const Loader: FC<LucideProps> = (props) => {
  return <Loader2 className="animate-spin" {...props} />;
};

export default Loader;
