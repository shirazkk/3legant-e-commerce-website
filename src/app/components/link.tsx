import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ReactNode } from "react";

interface LinksTextProps {
  texticon: string | ReactNode;
}

export default function LinksText({ texticon }: LinksTextProps) {
  return (
    <div>
      <div className="flex text-black underline font-semibold underline-offset-4 py-1">
        <Link href="#">{texticon}</Link>
        <ArrowForwardIcon />
      </div>
    </div>
  );
}
